// Последовательно у одного и того же объекта можно вызавать цепочки из операторов
// Пример - jQuery
class MySum {
    constructor(val = 30) {
        this.sum = val
    }

    add(val) {
        this.sum += val
        return this
    }
}

const sum1 = new MySum()
console.log(sum1.add(33).add(10).add(13).sum)