// dot all匹配。/s使.匹配任意符号
const str = "Testing\nAlpha\nBravo\nCharlie\nJavaScript";
console.log(str.match(/.[A-Z]/g));  // ["aS"]
console.log(str.match(/.[A-Z]/gs)); // ["\nA", "\nB", "\nC", "aS"]
