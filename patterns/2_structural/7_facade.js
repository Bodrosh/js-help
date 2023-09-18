// Фасад служит для более простого интерфейса для взаимодействия с классами
// Пример - jQuery - $('#user-id')

class Orders {
    constructor() {
        this.orders = []
    }

    details(order) {}

    add(order) {
        this.orders.push(order)
        return this.details(order)
    }
}

class ProductOrders extends Orders {
    details({id, user, textInfo}) {
        return `Product ${id} - ${user} - ${textInfo}`
    }
}

class ServiceOrders extends Orders {
    details({id, user, textInfo}) {
        return `Service ${id} - ${user} - ${textInfo}`
    }
}

// фасад - один класс, с кот. мы работаем и дальше уже сам класс
// может добавлять доп. метаданные и опредялет к какому типу класса нужно отнести объект
class OrderRegistry {
    register(user, type, textInfo) {
        const id = Date.now()

        let order
        if (type === 'service') {
            order = new ServiceOrders()
        } else {
            order = new ProductOrders()
        }

        return order.add({id, user, textInfo})
    }
}

const registry = new OrderRegistry()

console.log(registry.register('Ivan', 'product', 'Привезите быстрее'))
console.log(registry.register('Olga', 'service', 'Желательно завтра'))