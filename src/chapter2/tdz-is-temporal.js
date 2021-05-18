// let声明变量对应的TDZ是temporal(related to time)而不是spatial(related to space/location)的
function temporalExample() {
    const f = () => {
        console.log(value);
    };
    let value = 42;
    f();
}
temporalExample();
