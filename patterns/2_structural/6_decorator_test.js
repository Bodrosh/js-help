class StandardCoffee {
    constructor(size) {
        this.costs = size === 'small' ? 10 : 12
    }
    getCosts() {
       return this.costs
    }
    getDescription() {
        return 'standard coffee'
    }
}

class VanillaCoffee extends StandardCoffee {
    constructor(coffee) {
        super()
        this.costs = coffee.costs + 3
    }
    getCosts() {
        return this.costs
    }
    getDescription() {
        return ' + vanilla'
    }
}

class ChocolateCoffee extends StandardCoffee {
    constructor(coffee) {
        super()
        this.costs = coffee.costs + 2
    }
    getCosts() {
        return this.costs
    }
    getDescription() {
        return ' + chocolate'
    }
}

let coffee = new StandardCoffee('big')
console.log(coffee.getCosts())
console.log(coffee.getDescription())

coffee = new VanillaCoffee(coffee)
console.log(coffee.getCosts())
console.log(coffee.getDescription())

coffee = new ChocolateCoffee(coffee)
console.log(coffee.getCosts())
console.log(coffee.getDescription())