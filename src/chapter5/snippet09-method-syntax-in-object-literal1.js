// method syntax
const obj2 = {
    name: "Joe",
    say() {
        console.log(this.name);
    }
};
obj2.say(); // "Joe"
