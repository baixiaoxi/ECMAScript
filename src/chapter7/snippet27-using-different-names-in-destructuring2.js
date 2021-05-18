// 对象解构。对象属性的名字是字符串或Symbol，但是变量名组成是有要求的。可以指定属性名与变量名的对应关系
const obj = {"my-name": 1};
const {"my-name": myName} = obj;
console.log(myName);    // 1
