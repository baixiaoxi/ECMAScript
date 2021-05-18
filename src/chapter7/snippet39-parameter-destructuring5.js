// 函数参数数组解构
function example([a, b]) {
    console.log(a, b);
}
const arr = [1, 2, 3, 4];
example(arr);               // 1 2
example(["ayy", "bee"]);    // "ayy" "bee"
