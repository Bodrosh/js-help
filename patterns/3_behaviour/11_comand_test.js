class Engine {
    constructor() {
        this.state = false
    }
    on() {
        this.state = true
    }
    off() {
        this.state = false
    }
}

class Command {
    constructor(target) {
        this.operations = []
        this.target = target
    }
    execute(command) {
        this.operations.push(command)
        this.target[command]()
    }
}

const engine = new Engine()
console.log(engine)
const command = new Command(engine)
command.execute('on')
command.execute('off')
command.execute('on')
console.log(engine)
console.log(command.operations)

/*
class User {
    constructor() {
        this.orders = []
    }
    addOrder(order) {
        this.orders.push(order)
    }
}
class Worker {
    constructor() {
        this.clients = []
    }
    addClient(user) {
        this.clients.push(user)
    }
}
class Order {

}

class Kitchen {

}

const user1 = new User()
const worker1 = new Worker()

worker1.addClient(user1)
user1.addOrder(['pizza', 'watter'])



new Order()
*/
