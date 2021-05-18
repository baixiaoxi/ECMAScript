// 只有在super调用后，对象才构造完成。所以只能在super之后使用this
class Color {
    constructor(r = 0, g = 0, b = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

class ColorWithAlpha extends Color {
    constructor(r = 0, g = 0, b = 0, a = 1) {
        this.a = a;                  // ERROR HERE
        super(r, g, b);
    }
}

// Usage:
const c = new ColorWithAlpha(30, 144, 255, 0.5);
