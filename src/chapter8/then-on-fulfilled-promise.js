// promise的回调都是异步的

// There's a better way to get a resolved promise you'll learn
// about later in this chapter
const thePromise = new Promise(resolve => resolve());

console.log("before");
thePromise.then(() => {
    console.log("within");
});
console.log("after");
