// Array.flat。只对最上面一级展开
const original = [
    [1, 2, 3],
    [
        [4, 5, 6],
        [7, 8, 9]
    ]
];
const flattened = original.flat();
console.log(flattened);
// => [1, 2, 3, [4, 5, 6], [7, 8, 9]];
