// 共享内存示例。消费者
import {log, setLogging} from "./example-misc.js";
import {LockingInt32Queue} from "./locking-int32-queue.js";

// The basic flag for whether this consumer should keep running.
// Set by the `init` message, cleared by the `stop` message or on receipt of a
// buffer ID of -1.
let running = false;

// The ID this consumer uses when calling `log`, set by `init`
let logId;

// This consumer's ID, and the queues and buffers to use (set by `init`)
let consumerId = null;
let availableBuffersQueue;
let pendingBuffersQueue;
let buffers;
let fullspeed;

// The "now" function we'll use to time waiting for queue operations
const now = typeof performance !== "undefined" && performance.now
                ? performance.now.bind(performance)
                : Date.now.bind(Date);

// An array we use to wait within `calculateHash`, see below
const a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));// 模拟全速处理

// Calculates the hash for the given buffer.
function calculateHash(buffer) {// 计算哈希值
    // A real hash calculation like SHA-256 or even MD5 would take much longer than
    // the below, so after doing the basic XOR hash (which isn't a reliable hash,
    // it's just to keep things simple), this code waits a few milliseconds to
    // avoid completely overloading the main thread with messages. Real code
    // probably wouldn't do that, since the point of offloading the work to a
    // worker is to move work that takes a fair bit of time off the main thread.
    const hash = buffer.reduce((acc, val) => acc ^ val, 0);
    if (!fullspeed) {
        Atomics.wait(a, 0, 0, 10);
    }
    return hash;
}

// Processes buffers until either the `running` flag is no longer true or it's time
// to yield briefly to the event loop in order to receive any pending messages.
function processBuffers() {
    const yieldAt = Date.now() + 500;
    while (running) {// 循环处理待哈希数据池
        log(logId, "Getting buffer to process");
        let waitStart = now();
        const bufferId = pendingBuffersQueue.take();// 取待哈希的数据池
        let elapsed = now() - waitStart;
        log(logId, `Got bufferId ${bufferId} (elapsed: ${elapsed})`);
        if (bufferId === -1) {// 生产者让停
            // This is a flag from the producer that this consumer should stop
            actions.stop();
            break;
        }
        log(logId, `Hashing buffer ${bufferId}`);
        const hash = calculateHash(buffers[bufferId]);
        postMessage({type: "hash", consumerId, bufferId, hash});// 向主线程发送哈希结果
        waitStart = now();
        availableBuffersQueue.put(bufferId);// 主线程处理完后，这个数据池可以给消费者继续使用
        elapsed = now() - waitStart;
        log(logId, `Done with buffer ${bufferId} (elapsed: ${elapsed})`);
        if (Date.now() >= yieldAt) {// 每500ms暂停一下，处理消息
            log(logId, `Yielding to handle messages`);
            setTimeout(processBuffers, 0);
            break;
        }
    }
}

// Handle messages, take appropriate action
const actions = {
    // Initialize this consumer with data from the message
    init(data) {// 初始化消息
        ({consumerId, buffers, fullspeed} = data);
        setLogging(!fullspeed);
        logId = `consumer${consumerId}`;
        availableBuffersQueue =
            LockingInt32Queue.deserialize(data.availableBuffersQueue);
        pendingBuffersQueue =
            LockingInt32Queue.deserialize(data.pendingBuffersQueue);
        log(logId, "Running");
        running = true;
        processBuffers();
    },
    // Stop this consumer
    stop() {// 停止信息
        if (running) {
            running = false;
            log(logId, "Stopped");
        }
    }
}
self.addEventListener("message", ({data}) => {
    const action = data && data.type && actions[data.type];
    if (action) {
        action(data);
    }
});
