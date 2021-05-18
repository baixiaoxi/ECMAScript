// finally无法改变promise chain上的fulfillment的值。 不能有一般的返回值，有也被忽略。
// 若返回promise/thenable，则chain后面的语句需要等待promise/thenable settled
// 若返回rejects，则会替换chain上的fulfillment或修改rejects的原因

// Function returning promise that is fulfilled after the given
// delay with the given value
function returnWithDelay(value, delay = 100) {
    return new Promise(resolve => setTimeout(resolve, delay, value));
}

// The function doing the work
function doSomething() {
    return returnWithDelay("original value")
        .finally(() => {
            return returnWithDelay("unused value from finally", 1000);
        })
}

console.time("example");
doSomething()
    .then(value => {
        console.log("value = " + value); // "value = original value"
        console.timeEnd("example");      // example: 1100ms (or similar)
    });
