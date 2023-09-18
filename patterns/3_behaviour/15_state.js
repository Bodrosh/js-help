// создавать различные классы, кот., напр., будут являться эл-тами стейта
// и делегировать изменения состояния на общий класс, кот. будет менять состояние
// можно использовать при реализаии роутинга

// Пример сфетофор
class Light {
    constructor(light) {
        this.light = light
    }
}

class RedLight extends Light {
    constructor() {
        super('red')
    }

    message() {
        return 'Стоп'
    }
}

class YellowLight extends Light {
    constructor() {
        super('yellow')
    }

    message() {
        return 'Внимание'
    }
}

class GreenLight extends Light {
    constructor() {
        super('green')
    }

    message() {
        return 'Поехали'
    }
}

class TrafficLight {
    constructor() {
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight(),
        ]

        this.curState = this.states[0]
    }

    change() {
        const count = this.states.length
        const index = this.states.findIndex(i => i ===  this.curState)
        if (index + 1 < count) {
            this.curState = this.states[index + 1]
        } else {
            this.curState = this.states[0]
        }
    }

    message() {
        console.log(this.curState.message())
    }
}

const traffic = new TrafficLight()
traffic.message()
traffic.change()

traffic.message()
traffic.change()

traffic.message()
traffic.change()

traffic.message()
traffic.change()

traffic.message()
traffic.change()