// 对象解构。对象属性的名字是字符串或Symbol，但是变量名组成是有要求的，属性名不能直接拿来当变量名
const obj = {"my-name": 1};
let {my-name} = obj; // SyntaxError: Unexpected token -
let {"my-name"} = obj; // SyntaxError: Unexpected token }