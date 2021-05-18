// 对象解构。属性名也可以是computed的
let source = {a: "ayy", b: "bee"};
let name = Math.random() < 0.5 ? "a" : "b";
let {[name]: dest} = source;
console.log(dest);  // "ayy" half the time, "bee" the other half
