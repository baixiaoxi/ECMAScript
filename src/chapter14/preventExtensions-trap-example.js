// 代理。trap定义, preventExtensions
const obj = {};
const p = new Proxy(obj, {
    preventExtensions(target) {
        return false;
    }
});
console.log(Reflect.isExtensible(p));      // true
console.log(Reflect.preventExtensions(p)); // false
console.log(Reflect.isExtensible(p));      // true
