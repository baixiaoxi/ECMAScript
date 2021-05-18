// let声明其实也前置了，但因为有TDZ节制，消除了answer使用上的歧义
let answer; // The outer 'answer'
function hoisting() {
    answer = 42; // ReferenceError: 'answer' is not defined
    console.log(answer);
    let answer; // The inner 'answer'
}
hoisting();
