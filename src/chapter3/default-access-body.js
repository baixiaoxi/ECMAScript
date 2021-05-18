// 参数有自己的范围，介于outer和inner之间。不可引用函数内部的声明
function example(value = x) {
    var x = 42;
    console.log(value);
}
example(); // ReferenceError: x is not defined
