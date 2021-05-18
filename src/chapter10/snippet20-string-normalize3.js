// 字符串标准化。这样才能进行有意义的比较
// Note: This file is encoded in UTF-8. Your system may or may not have a different default encoding.

const f1 = "Français";
const f2 = "Franc\u0327ais";
console.log(f1.normalize() === f2.normalize()); // true

// If the above didn't produce the output shown above, it's likely an encoding problem. This version
// should work:
// const f1 = "Fran\xE7ais";
// const f2 = "Franc\u0327ais";
// console.log(f1.normalize() === f2.normalize()); // true
