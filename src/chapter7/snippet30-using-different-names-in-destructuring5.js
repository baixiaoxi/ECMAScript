// 对象解构。加括号，防止变成block定义
const source = {example: 42};
const dest = {};
({example: dest.result} = source);
console.log(dest.result);   // 42
