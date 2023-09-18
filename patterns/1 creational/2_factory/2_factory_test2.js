class Car {
    constructor(wheels = 4, doors = 5) {
        this.wheels = wheels
        this.doors = doors
    }
}

class Bmv extends Car {
    constructor(wheels, doors) {
        super(wheels, doors)
        this.brand = 'BMV'
    }
}
class Lada extends Car {
    constructor(wheels, doors) {
        super(wheels, doors)
        this.brand = 'Lada'
    }
}

class CarFactory {
    constructor(model, ...params) {
       const [wheels, doors] = params
        if (model === 'bmv') {
            return new Bmv(wheels, doors)
        }
        return new Lada(wheels, doors)
    }
}

const car1 = new CarFactory('bmv', 3)
const car2 = new CarFactory('dfs', 3)
console.log(car1)
console.log(car2)
