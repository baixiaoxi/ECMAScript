// function declarations in blocks: standard semantics，函数声明有效区域仅限所在块
"use strict";
function branching(num) {
    let f;
    console.log(num);
    if (num < 0.5) {
        console.log("true branch, typeof doSomething = " + typeof doSomething);
        f = doSomething;// 函数声明会前置
        function doSomething() {
            console.log("true");
        }
    } else {
        console.log("false branch, typeof doSomething = " + typeof doSomething);
        f = doSomething;
        function doSomething() {
            console.log("false");
        }
    }
    f();
}
branching(Math.random());
