// 具名匹配。indices除了各匹配项索引信息，还有groups对应具名匹配的索引信息
const rex = /(?<word>\w+) (?<num>\d+)/;
const str = "==> Testing 123";
const match = rex.exec(str);
for (const key of Object.keys(match.groups)) {
    const [start, end] = match.indices.groups[key];
    console.log(
        `Group "${key}" - [${start}, ${end}]: "${str.substring(start, end)}"`
    );
}
// =>
// Group "word" - [4, 11]: "Testing"
// Group "num" - [12, 15]: "123"