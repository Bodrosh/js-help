const car = {
    wheels: 4,
    info() {
        console.log(`У меня ${this.wheels} колеса, владелец ${this.owner}`)
    }
}

// Используем как скелет объект car (указываем его в качестве прототипа)
const ivan = Object.create(car, {
    owner: {
        value: 'Ivan'
    }
})

console.log(ivan.info())
console.log(ivan.__proto__ === car)