// Relfect.apply调用函数，可个性this绑定
function example(a, b, c) {
    console.log(`this.name = ${this.name}, a = ${a}, b = ${b}, c = ${c}`);
}
const thisArg = {name: "test"};
const args = [1, 2, 3];
Reflect.apply(example, thisArg, args); // this.name = test, a = 1, b, = 2, c = 3
