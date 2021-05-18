// arrow function,没有this，也无法添加属性，不具备constructor条件，不是constructor函数
const Doomed = () => { };
const d = new Doomed(); // TypeError: Doomed is not a constructor
