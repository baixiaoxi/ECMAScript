// Symbol.unscopables指定不引入的属性。新增加的属性，比如keys，不会影响到老的代码
// Loose mode only, since it uses `with`
const obj = {
    a: 1,
    b: 2,
    [Symbol.unscopables]: {
        b: true     // Makes `b` unscopable, leaving it out of `with` blocks
    }
};
with (obj) {
    console.log(a, b, typeof toString); // ReferenceError: b is not defined
}
