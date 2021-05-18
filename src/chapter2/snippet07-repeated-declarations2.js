// let有TDZ节制，不可重复定义
// Using `let`
function redundantRepetition() {
    let x = "alpha";
    console.log(x);
    // ...lots of code here...
    let x = "bravo"; // SyntaxError: Identifier 'x' has already been declared
    console.log(x);
    // ...lots of code here...
    return x;
}
redundantRepetition();
