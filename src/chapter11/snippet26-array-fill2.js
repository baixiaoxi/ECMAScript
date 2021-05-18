// Array.fill。注意，这里元素引用的是同一个对象。可以用Array.from构造undefined元素集，再用map替换成独立的对象
const a = Array(2).fill({});
a[0].name = "Joe";
a[1].name = "Bob";
console.log(a[0].name); // "Bob"
