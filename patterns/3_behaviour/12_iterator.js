// Последовательно получать доступ к информации
class MyIterator {
    constructor(data) {
        this.index = 0
        this.data = data
    }
    // в ES6 появился iterator, по нему можно исп. генераторы или for of
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

const iterator = new MyIterator(['this', 'is', 'iterator'])
for (const val of iterator) {
    console.log('Val:', val)
}

// через генераторы то же самое
function* generator(arr) {
    let index = 0
    while (index < arr.length) {
        yield arr[index++]
    }
}

const gen = generator(['this', 'is', 'iterator'])

// for (const val of gen) {
//     console.log('Val:', val)
// }
// или
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)



