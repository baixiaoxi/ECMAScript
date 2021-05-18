// iterator也是iterable，可以直接遍历
const a = ["one", "two", "three", "four"];
const it = a[Symbol.iterator]();
it.next();
for (const value of it) {
    console.log(value);
}
// =>
// "two"
// "three"
// "four"
