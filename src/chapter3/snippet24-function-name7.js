// 函数名，由上下文决定。注意，这里为了防止泄露对象内部信息，不会给参数命名
const obj = {};
obj.foo = function() {
};
console.log(obj.foo.name); // "" - there's no name
