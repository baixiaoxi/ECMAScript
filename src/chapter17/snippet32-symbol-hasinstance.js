// Symbol.hasInstance，相当于重载instanceof操作符
function FakeDate() { }
Object.defineProperty(FakeDate, Symbol.hasInstance, {
    value(value) { return value instanceof Date; }
});
console.log(new Date() instanceof FakeDate); // true
