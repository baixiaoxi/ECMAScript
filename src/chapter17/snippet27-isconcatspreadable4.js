// 数组和可展开对象的连接
class Example {
    constructor(...entries) {
        this.length = 0;
        this.add(...entries);
    }
    add(...entries) {
        for (const entry of entries) {
            this[this.length++] = entry;
        }
    }
}
Example.prototype[Symbol.isConcatSpreadable] = true;

const a = ["one", "two"];
const e = new Example("four", "five");
console.log(a.concat("three", e));
// => ["one", "two", "three", "four", "five"]
