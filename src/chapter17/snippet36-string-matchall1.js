// 正则表达式，每次循环都会改变状态值，比如lastIndex
const s = "Testing 1 2 3";
const rex = /\d/g;
let m;
while ((m = rex.exec(s)) !== null) {
    console.log(`"${m[0]}" at ${m.index}, rex.lastIndex: ${rex.lastIndex}`);
}
// => "1" at 8, rex.lastIndex: 9
// => "2" at 10, rex.lastIndex: 11
// => "3" at 12, rex.lastIndex: 13
