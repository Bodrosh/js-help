class Iterator {
    constructor(items) {
        this.items = items
        this.index = 0
        this.length = items.length

    }
    hasNext() {
        return this.index < this.length
    }
    next() {
        return this.items[this.index++]
    }
}

const iterator = new Iterator(['Hello', 'my', 'bro'])

while (iterator.hasNext()) {
    console.log(iterator.next())
}