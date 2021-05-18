// 函数参数对象解构。参数自带默认值，解构目标也有默认值
function example({a, b = "prop b def"} = {a: "param def a", b: "param def b"}) {
    console.log(a, b);
}
example();              // "param def a" "param def b"
example({a: "ayy"});    // "ayy" "prop b def"
