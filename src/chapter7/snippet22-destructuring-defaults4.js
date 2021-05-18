// 对象解构。默认值引用其他变量
const obj = {a: 10, b: 20};
const {c = a * 3, b, a} = obj;  // ReferenceError: a is not defined
console.log(c);
