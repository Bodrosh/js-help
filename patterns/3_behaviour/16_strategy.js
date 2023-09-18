// позволяет создавать некот. оболочку для разл. интерфейсов

class Transport {
    travelTime() {
        return this.time
    }
}

class Bus extends Transport {
    constructor() {
        super()
        this.time = 7
    }
}

class Taxi extends Transport {
    constructor() {
        super()
        this.time = 5
    }
}

class Bike extends Transport {
    constructor() {
        super()
        this.time = 10
    }
}

class Travel {
    travelTime(transport) {
        return transport.travelTime()
    }
}

const travel = new Travel()

// Оболочка взаимодействиет с различными стратегиями через один интерфейс:
console.log(travel.travelTime(new Taxi())) // 5
console.log(travel.travelTime(new Bus()))  // 7
console.log(travel.travelTime(new Bike())) // 10
