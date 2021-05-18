// 函数参数对象解构。默认值
function example({a, b = 2}) {
    console.log(a, b);
}
const o = {a: 1};
example(o); // 1 2
