// Пример - redux
// Получем доп. объект, у которого мы можем динамично и гико вызывать методы
// и сохранять доп. мета информацию

class MyMath {
    constructor(val = 0) {
        this.num = val
    }

    square() {
        return this.num ** 2
    }

    cube() {
        return this.num ** 3
    }
}

class Command {
    constructor(object) {
        this.object = object
        this.commansExecuted = []
    }

    // execute - выполнить
    execute(command) {
        this.commansExecuted.push(command) // инфа о вызванных командах
        return this.object[command]()
    }
}

const x = new Command(new MyMath(2))
console.log(x.execute('square')) // 4
console.log(x.execute('cube')) // 8

// Можно посмотреть выполненные команды
console.log(x.commansExecuted) // [ 'square', 'cube' ]
