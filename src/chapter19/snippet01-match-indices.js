// 匿名匹配。indices提供了匹配项的开始和结束索引。这是个数组，第一个是全部匹配，接下来是小括号中的匿名匹配
const rex = /(\w+) (\d+)/;
const str = "==> Testing 123";
const match = rex.exec(str);
for (const [start, end] of match.indices) {
    console.log(`[${start}, ${end}]: "${str.substring(start, end)}"`);
}
// =>
// [4, 15]: "Testing 123"
// [4, 11]: "Testing"
// [12, 15]: "123"