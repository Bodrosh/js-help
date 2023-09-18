class Cart {
    static instance
    constructor() {
        if (Cart.instance) return Cart.instance
        Cart.instance = this
        this.count = 0
    }

    getCount() {
        return this.count
    }

    incCount() {
        this.count++
    }
}

const cart1 = new Cart()
cart1.incCount()
cart1.incCount()

const cart2 = new Cart()
cart2.incCount()
cart2.incCount()

console.log(cart1.getCount())
console.log(cart2.getCount())