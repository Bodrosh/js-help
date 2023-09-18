// Удобно, когда объект может создаваться из несколькоих источников
// Или когда нужно создавать несколько объектов с одинаковой структурой, но разными данными

class Bmw {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
}

class BmwFactory {
    create(model) {
        switch (model) {
            case 'x5':
                return new Bmw('X5', 12000)
            case 'x3':
                return new Bmw('X3', 10000)
        }
    }
}

const factory = new BmwFactory()

console.log(factory.create('x5'))
console.log(factory.create('x3'))



// Abstract factory
class BmwProd {
    constructor(series) {
        return series === 'sport' ? BmwSportFactory : BmwForestFactory
    }
}

function BmwSportFactory() {
    return new X3()
}

function BmwForestFactory() {
    return new X5()
}

class X3 {
    info() {
        console.log('x3 is sort')
    }
}

class X5 {
    info() {
        console.log('X5 is forest')
    }
}

const factory2 = new BmwProd('sport')
const car = new factory2()
car.info()