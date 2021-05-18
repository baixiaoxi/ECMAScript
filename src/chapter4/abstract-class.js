// 抽象类。通过new.target来判断，实际还是可以用Object.create绕过的
class Shape {
    constructor(color) {
        if (new.target === Shape) {
            throw new Error("Shape can't be directly instantiated");
        }
        this.color = color;
    }

    toString() {
        return "[" + this.constructor.name + ", sides = " +
               this.sides + ", color = " + this.color + "]";
    }
}
class Triangle extends Shape {
    get sides() {
        return 3;
    }
}
class Rectangle extends Shape {
    get sides() {
        return 4;
    }
}
const t = new Triangle("orange");
console.log(String(t));     // "[Triangle, sides = 3, color = orange]"

const r = new Rectangle("blue");
console.log(String(r));     // "[Rectangle, sides = 4, color = blue]"

const s = new Shape("red"); // Error: "Shape can't be directly instantiated"
