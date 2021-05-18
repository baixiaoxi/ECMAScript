// 后引用。普通正则表达式，是从左往右处理的，右边可以引用左边已经处理过的匹配
// Not a new toy, this snippet shows the anonymous version of the named backreference
// shown by the next snippet
const rex = /(["']).+?\1/g;
const str = "testing 'a one', \"and'a two\", and'a three";
console.log(str.match(rex));    // ["'a one'", "\"and'a two\""]
