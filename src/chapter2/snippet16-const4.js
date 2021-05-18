// 常量引用不可变，内容可变
const obj = {
    value: "before"
};
console.log(obj.value); // "before"
obj.value = "after";
console.log(obj.value); // "after"
obj = {}; // TypeError: invalid assignment to const 'obj'
