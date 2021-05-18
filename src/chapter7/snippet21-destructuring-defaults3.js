// 对象解构。默认值，利用前面的变量来初始化默认值
const obj = {a: 10, b: 20};
const {a, b, c = a * 3} = obj;
console.log(c); // 30
