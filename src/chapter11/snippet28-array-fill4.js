// 构造数组，再转换。用Array.from构造undefined元素集，再用map替换成独立的对象
// You probably wouldn't use `Array.prototype.fill` if you wanted to fill an array
// with discrete objects, you'd use `Array.from`; but if you wanted to, you'd use
// `fill` and then `map`:
const a = Array(2).fill().map(() => ({}));
a[0].name = "Joe";
a[1].name = "Bob";
console.log(a[0].name); // Joe
