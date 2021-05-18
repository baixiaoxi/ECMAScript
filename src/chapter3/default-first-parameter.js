// 只要默认参数最后对应的是undefined，就使用默认参数值。即使手动传入undefined也相当于没有传入对应参数
function animate(type = "fadeout", duration) {
    console.log(type + ", " + duration);
}
animate("fadeout", 300);    // "fadeout, 300"
animate(undefined, 300);    // "fadeout, 300" (again)
animate("fadein",  300);    // "fadein, 300"
animate();                  // "fadeout, undefined"
