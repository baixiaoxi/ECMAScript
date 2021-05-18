// 构造对象，指定对象prototype
const p = {
    hi() {
        console.log("hi");
    }
};
const obj = {
    __proto__: p
};
obj.hi(); // "hi"
