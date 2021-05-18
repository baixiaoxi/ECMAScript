// var声明前置，忽略重复定义，易出问题
// Using `var`
function redundantRepetition() {
    var x = "alpha";
    console.log(x);
    // ...lots of code here...
    var x = "bravo";
    console.log(x);
    // ...lots of code here...
    return x;
}
redundantRepetition();
