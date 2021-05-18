// 数组解构。元素对象再解构
const arr = [{a: 1, b: 2}, {a: 3, b: 4}];
const [{a}, {b}] = arr;
console.log(a, b);  // 1 4
