// var声明的全局变量，其实也是global object的属性
// REMINDER: If you're running this in Node.js, you have to use
//      node < filename
// (note the `<` redirection), not just the usual `node filename`. This example
// relies on global scope, but normally node runs code in modules.
var answer = 42;
console.log("answer == " + answer);
console.log("this.answer == " + this.answer);
console.log("has property? " + ("answer" in this));
