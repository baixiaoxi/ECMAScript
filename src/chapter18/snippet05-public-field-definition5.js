// 对外属性。默认可遍历，可读写
class Example {
    field;
}
const e = new Example();
console.log("field" in e);      // true
console.log(typeof e.field);    // "undefined"
