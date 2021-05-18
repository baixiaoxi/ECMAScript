// method可以调用super的函数
const obj = {
    toString() {
        return super.toString().toUpperCase();
    }
};
console.log(obj.toString()); // "[OBJECT OBJECT]"
