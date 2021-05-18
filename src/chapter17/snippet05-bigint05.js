// 构造BigInt。由于参数是Number格式，存储精度丢失，导致最终BigInt失真。但是，用字符串是可以的
// Don't do this
let i = BigInt(1234567890123456789012345678);
console.log(i); // 1234567890123456850245451776n ?!??!!
