// 环境对象链。每个function都有一个[[Environment]]指向上一级环境变量
let x = 1;
function example() {
    const y = 2;
    return function() {
        let z = 3;
        console.log(z, y, x);
    };
}
const f = example();
f();
