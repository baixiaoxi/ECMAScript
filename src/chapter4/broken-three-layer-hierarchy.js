// 每个method都有一个[[HomeObject]]用来指示所属对象，而普通的function是没有的
function getFakeSuper(o) {
    return Object.getPrototypeOf(Object.getPrototypeOf(o));
}
class Base {
    test() {
        console.log("Base's test");
        return "Base test";
    }
}
class Sub extends Base {
    test() {
        console.log("Sub's test");
        return "Sub test > " + getFakeSuper(this).test.call(this);// 这里的this还是SubSub，导致死循环出现
    }
}
class SubSub extends Sub {
    test() {
        console.log("SubSub's test");
        return "SubSub test > " + getFakeSuper(this).test.call(this);
    }
}

// Usage:
const obj = new SubSub();
console.log(obj.test()); // "SubSub's test", then "Sub's test" repeatedly
                         // until a stack overflow error occurs
