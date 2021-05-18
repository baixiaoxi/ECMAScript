// 从global symbol registry中获取指定Symbol，防止不同的realm重复创建不同的Symbol
const BarkCounter = (() => {
    const barks = Symbol.for("nifty-barks");

    return class BarkCounter {
        constructor(other = null) {
            this[barks] = other && barks in other ? other[barks] : 0;
        }

        bark() {
            return ++this[barks];
        }
        
        showBarks(label) {
            console.log(label + ": Barks = " + this[barks]);
        }
    };
})();
