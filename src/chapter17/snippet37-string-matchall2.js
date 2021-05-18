// 使用matchAll匹配所有，遍历的时候不会修改正则表达式状态值
const rex = /\d/g;
for (const m of "Testing 1 2 3".matchAll(rex)) {
    console.log(`"${m[0]}" at ${m.index}, rex.lastIndex: ${rex.lastIndex}`);
}
// => "1" at 8, rex.lastIndex: 0
// => "2" at 10, rex.lastIndex: 0
// => "3" at 12, rex.lastIndex: 0
