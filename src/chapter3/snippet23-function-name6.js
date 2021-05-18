// 函数名，由上下文决定
(function(callback = function() { }) {
    console.log(callback.name); // "callback"
})();
