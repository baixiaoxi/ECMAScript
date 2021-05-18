// 构造函数名
class Base {
    constructor() {
        console.log(new.target.name);
    }
}

new Base(); // "Base"
