// BitInt不能用一元操作符转换到Number
console.log(+"20"); // => 20
console.log(+20n);  // => TypeError: Cannot convert a BigInt value to a number
