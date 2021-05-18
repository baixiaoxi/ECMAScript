// 计算属性，可以使用表达式
let counter = 0;
let obj = {
    [counter++]: counter++,
    [counter++]: counter++
};
console.log(obj); // {"0": 1, "2": 3}
