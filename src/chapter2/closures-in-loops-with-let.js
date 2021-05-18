// 每次循环都会创建新的环境对象，这样setTimeout捕获的就是不同环境对象中的变量
function closuresInLoopsWithLet() {
    for (let counter = 1; counter <= 3; ++counter) {
        setTimeout(function() {
            console.log(counter);
        }, 10);
    }
}
closuresInLoopsWithLet();
