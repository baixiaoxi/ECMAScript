// Array.from从对象上构造数组
const a = Array.from({length: 2, "0": "one", "1": "two"});
console.log(a); // ["one", "two"]
