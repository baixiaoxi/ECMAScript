// safe integer。Number用53位表示数值，11位表示指数。安全数值在[-2^53+1, 2^53-1]范围内
const a = 2**53;
console.log(a); // 9007199254740992 (2**53)
const b = a + 1;
console.log(b); // 9007199254740992 (2**53) (again)
