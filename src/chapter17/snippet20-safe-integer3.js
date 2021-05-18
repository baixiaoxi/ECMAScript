// safe integer。Number用53位表示数值，11位表示指数。安全数值在[-2^53+1, 2^53-1]范围内
const a = 2**53 - 1;
console.log(a); // 9007199254740991
const b = a + 1;
console.log(b); // 9007199254740992
const c = a + 2;
console.log(c); // 9007199254740992
const d = a + 3;
console.log(d); // 9007199254740994
