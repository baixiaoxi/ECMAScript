// Map遍历
const m = new Map([
    ["one", "uno"],
    ["two", "due"],
    ["three", "tre"]
]);
for (const entry of m) {
    console.log(`${entry[0]} => ${entry[1]}`);// entry是个两元素的一维数组
}
// one => uno
// two => due
// three => tre
