// Добавить возможность прохода циклом for...of
let range = {
    from: 1,
    to: 10,
}

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {
                    value: this.current++,
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

for (let i of range) {
    console.log(i)
}