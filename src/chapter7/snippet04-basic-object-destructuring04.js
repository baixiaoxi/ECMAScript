// 对象解构，不存在的属性
let obj = {first: 1, second: 2};
let {third: c} = obj;
console.log(c); // undefined, obj doesn't have a property called 'third'
