class Transport {
    travelTime() {
        console.log(`Время поездки ${this.time} мин`)
    }
}

class Car extends Transport {
    constructor() {
        super()
        this.time = 10
    }
}

class Bicycle extends Transport {
    constructor() {
        super()
        this.time = 15
    }
}

class TravelStrategy {
    getTime(transport) {
        return transport.travelTime()
    }
}

const travel = new TravelStrategy()
travel.getTime(new Bicycle())
travel.getTime(new Car())