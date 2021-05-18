// 共享内存示例入口

// This example uses one producer worker and multiple consumer workers to calculate
// hashes of data buffers. The work is managed using two queues. The queues and the
// data buffers are all contained in a single `SharedArrayBuffer`. The producer
// gets an available buffer ID from the `availableBuffersQueue`, fills that buffer
// with random data, and then adds the buffer's ID to the `pendingBuffersQueue` to
// be processed by consumers. When a consumer takes a buffer ID from the pending
// queue, it calculates the hash, then puts the buffer ID back into the available
// queue and posts the hash to the main thread.

import {log, setLogging} from "./example-misc.js";
import {LockingInt32Queue} from "./locking-int32-queue.js";

const fullspeed = location.search.includes("fullspeed");
setLogging(!fullspeed);

// The capacity of the queues
const capacity = 8;

// The size of each data buffer
const dataBufferLength = 4096;

// The number of buffers, must be at least as many as queue capacity
const dataBufferCount = capacity;

// The size of the SAB we'll need; note that since the data buffers are byte
// arrays, there's no need to multiply by Uint8Array.BYTES_PER_ELEMENT.
const bufferSize = (LockingInt32Queue.getBytesNeeded(capacity) * 2) +
                    (dataBufferLength * dataBufferCount);

// The number of consumers we'll create
const consumerCount = 4;

// The number of hashes received from consumers
let hashesReceived = 0;

// Create the SAB, the data buffers, and the queues. Again, since the data buffers
// are byte arrays this code doesn't need to use `Uint8Array.BYTES_PER_ELEMENT`.
let byteOffset = 0;
const sab = new SharedArrayBuffer(bufferSize);// 所有的队列和数据池都是从一块内存中分配出来的
const buffers = [];
for (let n = 0; n < dataBufferCount; ++n) {// 8块数据池在最前面
    buffers[n] = new Uint8Array(sab, byteOffset, dataBufferLength);
    byteOffset += dataBufferLength;
}
const availableBuffersQueue = new LockingInt32Queue(// 可用数据池ID队列。刚开始的时候8个池都是空的
    capacity, sab, byteOffset, [...buffers.keys()]
    //                         ^-- Initially, all the buffers are available
);
byteOffset += LockingInt32Queue.getBytesNeeded(capacity);// 计算队列长度
const pendingBuffersQueue = new LockingInt32Queue(// 待哈希数据池ID队列
    capacity, sab, byteOffset // Initially empty
);

// Handle a message posted from a consumer.
function handleConsumerMessage({data}) {// 处理消费者消息
    const type = data && data.type;
    if (type === "hash") {// 打印哈希值
        const {consumerId, bufferId, hash} = data;
        ++hashesReceived;
        log(
            "main",
            `Hash for buffer ${bufferId} from consumer${consumerId}: ${hash}, ` +
            `${hashesReceived} total hashes received`
        );
    }
}

// Create the producer and the consumers, get them started
const initMessage = {// 初始化消息
    type: "init",
    availableBuffersQueue: availableBuffersQueue.serialize(),
    pendingBuffersQueue: pendingBuffersQueue.serialize(),
    buffers,
    fullspeed
};
const producer = new Worker("./example-producer.js", {type: "module"});
producer.postMessage({...initMessage, consumerCount});// 向唯一的生产者发送初始化消息
const consumers = [];
for (let n = 0; n < consumerCount; ++n) {
    const consumer = consumers[n] =
        new Worker("./example-consumer.js", {type: "module"});
    consumer.postMessage({...initMessage, consumerId: n});// 向消费者发送初始化消息
    consumer.addEventListener("message", handleConsumerMessage);
}

// Tell the producer to stop producing new work after one second
setTimeout(() => {// 定时器，1秒后停止工作
    producer.postMessage({type: "stop"});
    setLogging(true);
    const spinner = document.querySelector(".spinner-border");
    spinner.classList.remove("spinning");
    spinner.role = "presentation";
    document.getElementById("message").textContent = "Done";
}, 1000);

// Show the main thread isn't blocked
let ticks = 0;
(function tick() {// 更新tick，显示非阻塞
    const ticker = document.getElementById("ticker");
    if (ticker) {
        ticker.textContent = ++ticks;
        setTimeout(tick, 10);
    }
})();
