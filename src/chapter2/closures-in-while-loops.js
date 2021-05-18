// while每次循环也会创建新的环境对象
function closuresInWhileLoops() {
    let outside = 1;
    while (outside <= 3) {
        let inside = outside;
        setTimeout(function() {
            console.log("inside = " + inside + ", outside = " + outside);
        }, 10);
        ++outside;
    }
}
closuresInWhileLoops();
