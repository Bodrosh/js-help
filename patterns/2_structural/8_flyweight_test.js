class Car {
    constructor(type, price) {
        this.type = type
        this.price = price
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }
    add(type, price) {
        const cacheCar = this.cars.find(car => car.type === type)
        if (cacheCar) return cacheCar

        const newCar = new Car(type, price)
        this.cars.push(newCar)
        return newCar
    }
}

const carFactory = new CarFactory()
console.log(carFactory.cars)
console.log(carFactory.add('bmw', 10000))
console.log(carFactory.add('bmw', 12000))
console.log(carFactory.add('mercedes', 10000))
console.log(carFactory.add('mercedes', 12000))
console.log(carFactory.add('mercedes', 10000))
console.log(carFactory.cars)