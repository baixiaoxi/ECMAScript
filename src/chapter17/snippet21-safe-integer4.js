// safe integer。Number用53位表示数值，11位表示指数。安全数值在[-2^53+1, 2^53-1]范围内
console.log(Number.isSafeInteger(42));              // true
console.log(Number.isSafeInteger(2**53 - 1));       // true
console.log(Number.isSafeInteger(-(2**53) + 1));    // true
console.log(Number.isSafeInteger(2**53));           // false (not safe)
console.log(Number.isSafeInteger(-(2**53)));        // false (not safe)
console.log(Number.isSafeInteger(13.4));            // false (not an integer)
console.log(Number.isSafeInteger("1"));             // false (string, not number)
