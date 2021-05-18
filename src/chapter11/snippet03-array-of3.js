// 数组派生。这个时候必须用of或from，没有简化的方式
class MyArray extends Array {
    niftyMethod() {
        // ...do something nifty...
    }
}
const a = MyArray.of("one", "two", "three");
console.log(a instanceof MyArray);  // true
console.log(a);                     // ["one", "two", "three"]
