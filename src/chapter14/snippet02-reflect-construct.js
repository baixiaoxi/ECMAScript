// Reflect.construct构造对象，可指定prototype
// Defining the function that builds custom errors
function buildCustomError(...args) {
    return Reflect.construct(Error, args, buildCustomError);// 指定new.target为buildCustomError，这样prototype就不是Error.prototype了
}
buildCustomError.prototype = Object.assign(Object.create(Error.prototype), {// 组合prototype，继承Error类型和report函数
    constructor: buildCustomError,
    report() {
        console.log(`this.message = ${this.message}`);
    }
});

// Using it
const e = buildCustomError("error message here");
console.log("instanceof Error", e instanceof Error);
e.report();
console.log(e);
