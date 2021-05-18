// TypedArray.set赋值，不能指定范围，只能是全部数值一起赋值
// ==== Prep for the snippet:

const a1 = Uint8Array.of(1, 2, 3);
const a2 = Uint8Array.of(4, 5);
const a3 = Uint8Array.of(6, 7, 8, 9);

// ==== The snippet:

const all = new Uint8Array(a1.length + a2.length + a3.length);
all.set(a1);
all.set(a2, a1.length);
all.set(a3, a1.length + a2.length);

// ==== Not in the snippet, but so you can see it in action:

console.log(all);
