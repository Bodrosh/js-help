// Пример с подписками пользователя

class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

// Т.к. много похожего кода, можно создать фактори, чтобы не писать каждый раз обьявления нового класса:

class MembershipFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create(name, type) {
        const Membership = MembershipFactory.list[type] || MembershipFactory.list["simple"]
        const msh = new Membership(name)

        msh.type = type
        msh.info = function() {
            console.log(`${this.name} - ${this.cost}`)
        }
        return msh
    }
}

const factory = new MembershipFactory()

// Создание пользователей происходит проще
const res = [
    factory.create('Ivan', 'simple'),
    factory.create('NotIvan', 'simple22'),
    factory.create('Inna', 'premium'),
    factory.create('Igor', 'standard'),
]

console.log(res)
res.forEach(i => i.info())