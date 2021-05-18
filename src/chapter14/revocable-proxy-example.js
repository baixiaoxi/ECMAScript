// 可撤销代理
const obj = {answer: 42};
const { proxy, revoke } = Proxy.revocable(obj, {});
console.log(proxy.answer); // 42
revoke();// 撤消
console.log(proxy.answer); // TypeError: Cannot perform 'get' on
                           // a proxy that has been revoked
