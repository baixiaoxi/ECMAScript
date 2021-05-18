// ?.操作符。每一个可为空的访问都要加上
const obj = {
    foo: {
        val: 42
    }
};

try {
    console.log(obj?.bar.val); // TypeError: Cannot read property 'val' of undefined
} catch (e) {
    console.error(`${e.name}: ${e.message}`);
}
console.log(obj?.bar?.val);    // undefined
