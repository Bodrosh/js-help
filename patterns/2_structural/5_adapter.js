// Позволяет интегрировать старый интерфейс класса в новый
// и позволяет работать совместно, не ломая приложение
// Удобно использовать в Api (есть старая и новая версия) или для внедрения нового кода

class OldCalc {
    operation(t1, t2, operation) {
        switch (operation) {
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: return NaN
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2
    }
    sub(t1, t2) {
        return t1 - t2
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }

    // Дублируем старый, но возвращаем результат из нового
    operation(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2)
            case 'sub': return this.calc.sub(t1, t2)
            default: return NaN
        }
    }
}

const oldCalc = new OldCalc()
console.log('oldCalc', oldCalc.operation(3,5, 'add'))

const newCalc = new NewCalc()
console.log('newCalc', newCalc.add(3,5))

const adapter = new CalcAdapter()
console.log('adapter', adapter.operation(3,5, 'add'))