// 对象解构。如果是赋值语句模式，需要用括号括起，防止误认为是block定义
// ==== Prep for the snippet:

function getSomeObject() {
    return {
        first: 1,
        second: 2
    };
}

// ==== The snippet:

let first, second;
// ...
{ first, second } = getSomeObject(); // SyntaxError: Unexpected token =
