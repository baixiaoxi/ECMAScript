// generator函数，由*和yield组成
function* simple() {
    for (let n = 1; n <= 3; ++n) {
        yield n;
    }
}
for (const value of simple()) {
    console.log(value);
}
