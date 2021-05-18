// 对象解构。rest...操作
const obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
const {a, d, ...rest} = obj;
console.log(a);     // 1
console.log(d);     // 4
console.log(rest);  // {b: 2, c: 3, e: 5}
