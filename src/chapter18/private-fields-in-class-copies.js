// private fields。类型每次执行过后都会创建一个新的私有环境对象，私有属性名是不一样的。这就导致下面的Counter1和Counter2的私有环境对象不一致，访问出错
function makeCounterClass() {
    return class Counter {
        #value;

        constructor(start = 0) {
            this.#value = start;
        }

        increment() {
            return ++this.#value;
        }

        get value() {
            return this.#value;
        }

        static show(counter) {
            console.log(`counter.#value = ${counter.#value}`);
        }
    };
}

const Counter1 = makeCounterClass();
const Counter2 = makeCounterClass();

const c = new Counter1();
c.increment();
Counter1.show(c);   // "counter.#value = 1"
Counter2.show(c);   // TypeError: Cannot read private member #value from an
                    // object whose class did not declare it
