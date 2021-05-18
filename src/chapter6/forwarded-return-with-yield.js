// generator, outer调用return并传值，会导致从最里层generator函数开始逐级返回。注意，返回值会保留到finally语块
function* inner() {
    try {
        let n = 0;
        while (true) {
            yield "inner " + n++;
        }
    } finally {
        console.log("inner terminated");
    }
}
function* outer() {
    try {
        yield "outer before";
        yield* inner();
        yield "outer after";
    } finally {
        yield "outer finally";
        console.log("outer terminated");
    }
}

const gen = outer();
let result = gen.next();
console.log(result);     // {value: "outer before", done: false}
result = gen.next();
console.log(result);     // {value: "inner 0", done: false}
result = gen.next();
console.log(result);     // {value: "inner 1", done: false}
result = gen.return(42); // "inner terminated"
console.log(result);     // {value: "outer finally", done: false}
result = gen.next();     // "outer terminated"
console.log(result);     // {value: 42, done: true}
