// tagged template literals, 使用String.raw不转义
const answer = 42;
console.log(String.raw`Answer:\t${answer}`);    // Answer:\t42
