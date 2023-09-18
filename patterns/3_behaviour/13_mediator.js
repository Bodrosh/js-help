// взаимодействие между объектами через друг друга
// Пример - чат, юзеры могут отправлять в комнате друг другу или всем

class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    // Отправка сообщений
    send(message, to) {
        this.room.send(message, this, to)
    }

    // получение сообщений
    receive(message, from) {
        console.log(`${from.name} -> ${this.name}: ${message}`)
    }
}

// медиатор
class ChatRoom {
    constructor() {
        this.users = {}
    }

    // Добавляем юзера в комнату
    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        // конкретному юзеру
        if (to) {
            to.receive(message, from)
        }
        // или всем, кроме текущего
        else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const ivan = new User('Ivan')
const lena = new User('Lena')
const kesha = new User('Kesha')

const room = new ChatRoom()
room.register(ivan)
room.register(lena)
room.register(kesha)

ivan.send('Hi', lena)
lena.send('Hello', ivan)
kesha.send('Vsem privet')