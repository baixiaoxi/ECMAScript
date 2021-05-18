// 数组解构。由于没有添加分号结尾，[]会被认为是上一语句的组成成分，导致语法错误
const arr = [1, 2]
let first, second
console.log("ASI hazard")
[first, second] = arr // TypeError: Cannot set property 'undefined' of undefined
console.log(first, second)
