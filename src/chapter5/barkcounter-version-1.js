// 拥有相同的Symbol属性，拷贝该属性
const BarkCounter = (() => {
    const barks = Symbol("nifty-barks");

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
