// 差不多所有值都可以作为键，除了+-0等特殊存在
const key = -0;
console.log(key);               // -0
const m = new Map();
m.set(key, "value");
const [keyInMap] = m.keys();    // (`keys` returns an iterator for the map's keys)
console.log(keyInMap);          // 0
console.log(`${m.get(0)}`);     // value
console.log(`${m.get(-0)}`);    // value
