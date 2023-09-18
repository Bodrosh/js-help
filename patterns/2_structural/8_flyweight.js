// Нар., загрузка в браузерах для избежания повторной загрузки изображений, что уже загружены
// + кэширование, сохранение памяти

// Пример - закэшировали объект, при создании такого же уже не создается

class Car {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }

    create(model, price) {
        // попробуем получить объект, он может уже существовать в классе
        const candidate = this.getCar(model)
        if (candidate) {
            return candidate
        }

        const newCar = new Car(model, price)
        this.cars.push(newCar)

        return  newCar
    }

    getCar(model) {
        return this.cars.find(i => i.model === model)
    }
}

const factory = new CarFactory()

const bmwX6 = factory.create('Bmw', 10000)
const audi = factory.create('Audi', 8000)
const bmwX3 = factory.create('Bmw', 7000)


console.log(bmwX6)
console.log(audi)
console.log(bmwX3) // выведет данные bmwX6
console.log(bmwX6 === bmwX3)
