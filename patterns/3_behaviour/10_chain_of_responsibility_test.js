class User {
    constructor() {
        this.userCards = []
    }
    addCard(card) {
        this.userCards.push(card)
    }
    pay(sum) {
        if (!this.userCards.find(card => card.balance >= sum)) {
            console.log('не хватает средств')
            return false
        }
        this.userCards.forEach(card => {
            if (card.withdraw(sum)) return true
        })

        return false
    }
}

class Card {
    constructor(type) {
        this.balance = 0
        this.card = type
    }
    deposit(sum) {
        this.balance += sum
    }
    withdraw(sum) {
        if (sum > this.balance) {
            console.log('Не хватает средств на карте ' + this.card)
            return false
        }

        this.balance -= sum
        console.log(`Успешное списание ${sum} с карты ${this.card}`)
        return true
    }
}
class Visa extends Card {
    constructor() {
        super('visa')
    }
}
class Mir extends Card {
    constructor() {
        super('mir')
    }
}

const user1 = new User()
user1.addCard(new Mir())
user1.addCard(new Visa())

user1.userCards[0].deposit(100)
user1.userCards[1].deposit(1000)
console.log(user1.userCards)

user1.pay(300)

console.log(user1.userCards)