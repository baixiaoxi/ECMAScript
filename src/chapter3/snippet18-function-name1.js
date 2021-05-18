// 函数名，由上下文决定
// Declaration
function foo() {
}
console.log(foo.name);  // "foo"

// Named function expression
const f = function bar() {
};
console.log(f.name);    // "bar"
