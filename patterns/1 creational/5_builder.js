class Burger {
    constructor(data) {
        this.hasPeperoni = data.hasPeperoni
        this.hasTomato = data.hasTomato
    }
}
class BurgerBuilder {
    constructor() {
        this.hasPeperoni = false
        this.hasTomato = false
    }
    addPeperoni() {
        this.hasPeperoni = true
        return this
    }
    addTomato() {
        this.hasTomato = true
        return this
    }
    build() {
        return new Burger(this)
    }

}

const myBurger = (new BurgerBuilder())
        .addPeperoni()
        //.addTomato()
        .build()

console.log(myBurger)