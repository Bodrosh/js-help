class Iterator {
    constructor(items) {
        this.index = 0
        this.length = items.length
        this.items = items
    }
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.length) {
                    return {
                        value: this.items[this.index++],
                        done: false
                    }
                }
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }

}

const iterator = new Iterator(['hello', 'my', 'bro'])

for (let i of iterator) {
    console.log(i)
}