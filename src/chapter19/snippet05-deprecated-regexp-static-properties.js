// RegExp.$1等过时的功能将被删除，泄漏了匹配信息。
const s = "Testing a-1 b-2 c-3";
const rex = /(\w)-(\d)/g;
while (rex.exec(s)) {
    // NOT RECOMMENDED!
    console.log(`"${RegExp.$1}": "${RegExp.$2}"`);
}
// => "a": "1"
// => "b": "2"
// => "c": "3"
