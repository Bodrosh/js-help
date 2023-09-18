function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase('привет, мир'));
function position(a, b) {
    if (!a && !b) {
        return {
            x: undefined,
            y: undefined
        };
    }
    if (a && !b) {
        return {
            x: a,
            y: undefined
        };
    }
    return {
        x: a,
        y: b,
        default: a.toString()
    };
}
console.log(position()); // { x: undefined, y: undefined }
console.log(position(32)); // { x: 32, y: undefined }
console.log(position(32, 32)); // { x: 32, y: 32 }
