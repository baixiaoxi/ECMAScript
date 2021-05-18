// es5老的做法。counter声明前置，必须用匿名函数的方式来每次捕获不同的变量
function closuresInLoopsES5() {
    for (var counter = 1; counter <= 3; ++counter) {
        (function(value) {
            setTimeout(function() {
                console.log(value);
            }, 10);
        })(counter);
    }
}
closuresInLoopsES5();
