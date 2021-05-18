// new.target指向的是调用super的构造函数名，也就是原始调用处的构造函数名
class Base {
    constructor() {
        console.log(new.target.name);
    }
}

class Sub extends Base {
    // (This is exactly what the default constructor would be, but I've included
    // it for clarity, to explicitly show the `super()` call.)
    constructor() {
        super();
    }
}
new Sub(); // "Sub"
