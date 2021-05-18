// 日志模块
export function log(msg) {
    const p = document.createElement("pre");
    p.appendChild(document.createTextNode(msg));
    document.body.appendChild(p);
}
