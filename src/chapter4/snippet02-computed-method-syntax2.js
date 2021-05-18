// computed method
class Guide {
    static [6 * 7]() {// 表达式最终都会转成字符串
        console.log("Life, the Universe, and Everything");
    }
}
Guide["42"](); // "Life, the Universe, and Everything"
