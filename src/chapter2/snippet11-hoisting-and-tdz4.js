// let声明其实也前置了，但因为有TDZ节制，消除了answer使用上的歧义
function blockExample(str) {
    let p = "prefix";               // The outer ' p ' declaration
    if (str) {
        p = p.toUpperCase();        // ReferenceError: 'p' is not defined
        str = str.toUpperCase();
        let p = str.indexOf("X");   // The inner ' p ' declaration
        if (p != -1) {
            str = str.substring(0, p);
        }
    }
    return p + str;
}
blockExample("Test X");
