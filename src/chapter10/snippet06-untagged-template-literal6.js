// untagged template literals, 替换表达式
const a = ["one", "two", "three"];
console.log(`Complex: ${
    a.reverse()
    .join()
    .toUpperCase()
}`);    // "Complex: THREE,TWO,ONE"
