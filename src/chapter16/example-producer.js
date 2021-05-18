// 共享内存示例。生产者

import {log, setLogging} from "./example-misc.js";
import {LockingInt32Queue} from "./locking-int32-queue.js";

// The basic flag for whether this producer should keep running. Set by
// `actions.init` (called by an `init` message from the main thread), cleared by
// the `stop` message or on receipt of a buffer ID of -1.
let running = false;

// The ID this producer uses when calling `log`, set by `actions.init`
let logId = "producer";

// The queues and buffers to use, and the number of consumers main has running (set
// by `actions.init`).
let availableBuffersQueue;
let pendingBuffersQueue;
let buffers;
let consumerCount;
let fullspeed;

// Fills buffers until either the `running` flag is no longer true or it's time
// to yield briefly to the event loop in order to receive any pending messages.
function fillBuffers() {
    const yieldAt = Date.now() + 500;
    while (running) {// 循环处理空闲数据池
        log(logId, "Taking available buffer from queue");
        const bufferId = availableBuffersQueue.take();// 取空闲数据池
        const buffer = buffers[bufferId];
        log(logId, `Filling buffer ${bufferId}`);
        for (let n = 0; n < buffer.length; ++n) {
            buffer[n] = Math.floor(Math.random() * 256);// 往数据池中生成随机数据
        }
        log(logId, `Putting buffer ${bufferId} into queue`);
        const size = pendingBuffersQueue.put(bufferId);// 填充好数据后，放到待哈希队列
        if (Date.now() >= yieldAt) {// 每500ms暂停一下，处理消息
            log(logId, "Yielding to handle messages");
            setTimeout(fillBuffers, 0);
            break;
        }
    }
}

// Handle messages, take appropriate action
const actions = {
    // Initialize the producer from data in the message
    init(data) {// 初始化消息
        ({consumerCount, buffers, fullspeed} = data);
        setLogging(!fullspeed);
        log(logId, "Running");
        running = true;
        availableBuffersQueue =
            LockingInt32Queue.deserialize(data.availableBuffersQueue);
        pendingBuffersQueue =
            LockingInt32Queue.deserialize(data.pendingBuffersQueue);
        fillBuffers(data);
    },
    // Stop this producer
    stop() {// 停止消息
        if (running) {
            running = false;
            log(logId, "Stopping, queuing stop messages for consumers");
            for (let n = 0; n < consumerCount; ++n) {
                pendingBuffersQueue.put(-1);// 发消息，停止消费者
            }
            log(logId, "Stopped");
        }
    }
}
self.addEventListener("message", ({ data }) => {
    const action = data && data.type && actions[data.type];
    if (action) {
        action(data);
    }
});