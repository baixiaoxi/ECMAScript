// es5老的做法。counter声明前置，每次循环捕获的都是同一个变量，最后输出的结果一样
function closuresInLoopsProblem() {
    for (var counter = 1; counter <= 3; ++counter) {
        setTimeout(function() {
            console.log(counter);
        }, 10);
    }
}
closuresInLoopsProblem();
