function* strGenerator(num) {
    for (let i = 0; i < num; i++) {
        yield i
    }
}
const strGen = strGenerator(3)
console.log(strGen.next())
console.log(strGen.next())
console.log(strGen.next())
console.log(strGen.next())

console.log('-------')
const strGen2 = strGenerator(3)

for (let item of strGen2) {
    console.log(item)
}
console.log('-------')


// Свой генератор
class BrGenerator {
    constructor(n) {
        this.n = n
        this.i = 0
    }
    next() {
        if (this.i < this.n) {
            return {'value': this.i++, 'done': false}
        }
        return {'value': undefined, 'done': true}
    }
}
const brGen = new BrGenerator(3)

console.log(brGen.next())
console.log(brGen.next())
console.log(brGen.next())
console.log(brGen.next())
console.log(brGen.next())
console.log(brGen.next())