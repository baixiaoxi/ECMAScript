// 导出符号重命名
const a = 1;
let c = 0;
export { c as counter };
export function increment() {
    ++c;
}
