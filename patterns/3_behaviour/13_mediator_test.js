class User {
    constructor(name) {
        this.name = name
        this.room = null
    }
    send(message, to) {
        this.room.send(message, this, to)
    }
    recive(message, from) {
        console.log(`${this.name}: Получение от ${from.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = []
        this.id = (new Date()).getTime()
    }
    addUser(user) {
        this.users.push(user)
        user.room = this
    }
    send(message, from, to) {
        if (this.users.find(item => item.name === to.name)) {
            console.log(`${from.name}: Отправка пользователю ${to.name}: ${message}`)
            to.recive(message, from)
        }
        else {
            console.log(`ПОльзователь не найден в комнате #${this.id}`)
        }
    }
}


const u1 = new User('Vasya')
const u2 = new User('Lena')
const u3 = new User('Vadim')

const room1 = new ChatRoom()
room1.addUser(u1)
room1.addUser(u2)

u1.send('hello', u2)

