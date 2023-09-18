class Observer {
    constructor(state = 0) {
        this.state = state
    }
    update(operation) {
        switch(operation) {
            case '++':
                this.state++
                break
            case '--':
                this.state--
                break
        }
    }
}

class Informator {
    constructor() {
        this.observers = []
    }
    subscribe(observer) {
        this.observers.push(observer)
    }
    notify(obj) {
        this.observers.forEach(i => i.update(obj.type))
    }
}

const informator = new Informator()

// создаем объекты
const obs1 = new Observer()
const obs2 = new Observer(30)

// подписываемся на стрим
informator.subscribe(obs1)
informator.subscribe(obs2)

// у одного события вызываем событие и диспатч одного события изменяет все подписки
informator.notify({type: '++'})
informator.notify({type: '++'})
informator.notify({type: '++'})
informator.notify({type: '++'})
informator.notify({type: '--'})

console.log(obs1.state)
console.log(obs2.state)