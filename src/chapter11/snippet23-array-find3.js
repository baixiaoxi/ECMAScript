// Array.find。调用的开始确定了访问的元素集合。期间，可以修改未访问元素的值，访问的时候反映最新的元素值。新增的元素不在访问集合里
const a = ["one", "two", "three"];
const x = a.find((value, index) => {
    console.log(`Visiting index ${index}: ${value}`);
    if (index === 0) {
        a[2] = a[2].toUpperCase();
    } else if (index === 1) {
        a.push("four");
    }
    return value === "four";
});
console.log(x);
// =>
// Visiting index 0: one
// Visiting index 1: two
// Visiting index 2: THREE
// undefined