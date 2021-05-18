// postMessage共享transferables。主线程

// This is the `postMessage`+transferables version of example-main.js

import {log, setLogging} from "./example-misc.js";

const fullspeed = location.search.includes("fullspeed");
setLogging(!fullspeed);

// The capacity of the queues (which is also the number of data buffers we have,
// which is really how the queues in this example are limited)
const capacity = 8;

// The size of each data buffer
const dataBufferLength = 4096;

// The number of buffers, must be at least as many as queue capacity
const dataBufferCount = capacity;

// The number of consumers we'll create
const consumerCount = 4;

// The number of hashes received from consumers
let hashesReceived = 0;

// Flag for whether we're running (producer and consumers no longer need this flag,
// they just respond to what they're sent)
let running = false;

// Create the data buffers and the queues (which can be simple arrays, since
// only this thread accesses them)
const buffers = [];
const availableBuffersQueue = [];
for (let id = 0; id < dataBufferCount; ++id) {// 默认所有数据池都可用
    buffers[id] = new Uint8Array(dataBufferLength);// ArrayBuffer是可转移的
    availableBuffersQueue.push(id);
}
const pendingBuffersQueue = [];

// Handle messages, take appropriate action
const actions = {
    hash(data) {// 收到哈希结果
        // Got a hash from a consumer
        const {consumerId, bufferId, buffer, hash} = data;
        buffers[bufferId] = buffer;
        availableBuffersQueue.push(bufferId);
        availableConsumersQueue.push(consumerId);
        ++hashesReceived;
        log(
            "main",
            `Hash for buffer ${bufferId} from consumer${consumerId}: ` +
            `${hash}, ${hashesReceived} total hashes received`
        );
        if (running) {
            sendBufferToProducer();
            sendBufferToConsumer();
        }
    },
    buffer(data) {// 收到数据消息
        // Got a buffer from the producer
        const {buffer, bufferId} = data;
        buffers[bufferId] = buffer;
        pendingBuffersQueue.push(bufferId);
        sendBufferToProducer();
        sendBufferToConsumer();
    }
};
function handleMessage({data}) {
    const action = data && data.type && actions[data.type];
    if (action) {
        action(data);
    }
}

// Create the producer and the consumers, get them started
const initMessage = { type: "init", fullspeed };
const producer = new Worker("./pm-example-producer.js", {type: "module"});
producer.addEventListener("message", handleMessage);
producer.postMessage(initMessage);// 向生产者发送消息
const availableConsumersQueue = [];
const consumers = [];
for (let consumerId = 0; consumerId < consumerCount; ++consumerId) {
    const consumer = consumers[consumerId] =
        new Worker("./pm-example-consumer.js", {type: "module"});
    consumer.postMessage({...initMessage, consumerId});// 向所有消费者发初始化消息
    consumer.addEventListener("message", handleMessage);
    availableConsumersQueue.push(consumerId);
}

// Send a buffer to the producer to be filled, if we're running and there are
// any buffers available
function sendBufferToProducer() {// 有空间，通知生产者
    if (running && availableBuffersQueue.length) {
        const bufferId = availableBuffersQueue.shift();
        const buffer = buffers[bufferId];
        producer.postMessage(
            {type: "fill", buffer, bufferId},
            [buffer.buffer] // Transfer underlying `ArrayBuffer` to producer
            // 转移ArrayBuffer
        );
    }
}

// Send a buffer to a consumer to be hashed, if there are pending buffers and
// available consumers
function sendBufferToConsumer() {// 有数据，通知消费者
    if (pendingBuffersQueue.length && availableConsumersQueue.length) {
        const bufferId = pendingBuffersQueue.shift();
        const buffer = buffers[bufferId];
        const consumerId = availableConsumersQueue.shift();
        consumers[consumerId].postMessage(
            {type: "hash", buffer, bufferId},
            [buffer.buffer] // Transfer underlying `ArrayBuffer` to consumer
        );
    }
}

// Start producing work
running = true;
while (availableBuffersQueue.length) {// 通知生产者
    sendBufferToProducer();
}

// Stop producing new work after one second.
setTimeout(() => {// 定时1s后停止
    running = false;
    setLogging(true);
    const spinner = document.querySelector(".spinner-border");
    spinner.classList.remove("spinning");
    spinner.role = "presentation";
    document.getElementById("message").textContent = "Done";
}, 1000);

// Show the main thread isn't blocked
let ticks = 0;
(function tick() {// 刷新tick，显示非阻塞
    const ticker = document.getElementById("ticker");
    if (ticker) {
        ticker.textContent = ++ticks;
        setTimeout(tick, 10);
    }
})();
