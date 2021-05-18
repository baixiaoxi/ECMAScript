// 默认值，其实介于 outer和inner之间，有自己的限制范围。参数声明顺序与按括号中书写顺序是一致的，不能引用后面声明的参数变量
const types = {
    fadein: 200,
    flyin: 400
};
function getDefaultDuration(type) {
    console.log("getDefaultDuration called with type = " + type);
    return types[type] || 300;
}
function animate(duration = getDefaultDuration(type), type) {
    // ...do the work...
}
animate(undefined, "dissolve"); // ReferenceError: type is not defined
