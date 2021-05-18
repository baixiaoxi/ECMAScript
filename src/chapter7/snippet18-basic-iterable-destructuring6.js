// 数组解构。在[]前添加分号，防止与前语句结合
const arr = [1, 2]
let first, second
console.log("ASI hazard")
;[first, second] = arr
console.log(first, second)  // 1 2
