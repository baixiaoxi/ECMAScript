// async-await。async就相当于返回一个promise
async function a() {
    return await Promise.resolve("a");
}
async function b() {
    return Promise.resolve("b");
}
a().then(value => console.log(value));
b().then(value => console.log(value));
