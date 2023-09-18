class Light {
    constructor(color) {
        this.color = color
    }
}

class RedLight extends Light {
    constructor() {
        super('red')
    }
    signal() {
        console.log('Стой')
    }
}
class YellowLight extends Light {
    constructor() {
        super('yellow')
    }
    signal() {
        console.log('Готовься')
    }
}

class GreenLight extends Light {
    constructor() {
        super('green')
    }
    signal() {
        console.log('Поехали')
    }
}

class TrafficLight {
    constructor() {
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ]
        this.index = 0
        this.current = this.states[this.index]
    }
    signal() {
        this.current.signal()
    }
    change() {
        if (this.index + 1 === this.states.length) {
            this.index = 0
        }
        else {
            this.index += 1
        }
        this.current = this.states[this.index]
    }
}

const traffic = new TrafficLight()
traffic.signal()
traffic.change()
traffic.signal()
traffic.change()
traffic.signal()
traffic.change()
traffic.signal()
traffic.change()
traffic.signal()
traffic.change()
traffic.signal()
traffic.change()
traffic.signal()
traffic.change()