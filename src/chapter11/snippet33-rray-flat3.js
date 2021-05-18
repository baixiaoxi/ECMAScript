// Array.flat。指定展开深度
const original = [
    "a",
    [
        "b",
        "c",
        [
            "d",
            "e",
            [
                "f",
                "g",
                [
                    "h",
                    "i"
                ],
            ],
        ],
    ],
    "j"
];
const flattened = original.flat(Infinity);
console.log(flattened);
// => ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
