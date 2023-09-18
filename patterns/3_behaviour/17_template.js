// определяет некоторую структуру (скелет),
// а дочерние классы реализуют конкретный функционал

class User {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    curWork() {}

    goWork() {
        return `${this.name} выполняет ${this.curWork()}`
    }

    getPrice() {
        return `${this.name} получает ${this.price}`
    }
}

class Developer extends User {
    constructor(name, price) {
        super(name, price)
    }

    curWork() {
        return 'разработку ПО'
    }
}

class Tester extends User {
    constructor(name, price) {
        super(name, price)
    }

    curWork() {
        return 'тест ПО'
    }
}

const dev = new Developer('Ivan', 1000)
console.log(dev.getPrice()) // Ivan получает 1000
console.log(dev.goWork())   // Ivan выполняет разработку ПО

const tester = new Tester('Igor', 800)
console.log(tester.getPrice()) // Igor получает 800
console.log(tester.goWork())   // Igor выполняет тест ПО