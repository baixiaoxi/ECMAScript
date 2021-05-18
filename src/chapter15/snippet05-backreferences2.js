// 具名匹配引用。用\k<quote>引用
const rex = /(?<quote>["']).+?\k<quote>/g;
const str = "testing 'a one', \"and'a two\", and'a three";
console.log(str.match(rex));    // ["'a one'", "\"and'a two\""]
