function add(a: number, b: number): number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.toUpperCase()
}

console.log(toUpperCase('привет, мир'))


// f-ии можно перегружать (исп. в библиотеках lodash, rxJs, Angular)
// Т.е. вызывать f-ию с разными параметрами и получать разные значения

interface MyPosition {
    x: number | undefined,
    y: number | undefined
}
interface MyPositionOne extends MyPosition {
    default: string
}
function position(): MyPosition
function position(a: number): MyPositionOne
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {
            x: undefined,
            y: undefined
        }
    }
    if (a && !b) {
        return {
            x: a,
            y: undefined
        }
    }

    return {
        x: a,
        y: b,
        default: a.toString()
    }
}

console.log(position()) // { x: undefined, y: undefined }
console.log(position(32)) // { x: 32, y: undefined }
console.log(position(32, 32)) // { x: 32, y: 32 }