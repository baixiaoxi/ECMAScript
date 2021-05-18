// Array.from构造数组。parseInt是转换函数，但参数是下标不是进制单位
const str = "987654321";
const a = Array.from(str, parseInt); // <=== WRONG
console.log(a); // [9, NaN, NaN, NaN, NaN, 4, 3, 2, 1]
