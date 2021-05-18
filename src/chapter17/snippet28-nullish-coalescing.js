// ?? coalescing操作符。解决||无法判别对象属性值为0的问题
const obj = {};
let nextId = 1;
obj.id = obj.id ?? nextId++;
console.log(obj.id, nextId);    // 1 2
obj.id = obj.id ?? nextId++;
console.log(obj.id, nextId);    // 1 2 again, `nextId` wasn't incremented 
