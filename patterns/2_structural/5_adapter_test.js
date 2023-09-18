class OldCalc {
    calculate(operation, num1, num2) {
        if (operation === 'add') return num1 + num2
        return num1 - num2
    }
}

class NewCalc {
    add(a, b) {
        return a + b
    }
    sub(a, b) {
        return a - b
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }
    calculate(operation, num1, mum2) {
        if (operation === 'add') return this.calc.add(num1, mum2)
        return this.calc.sub(num1, mum2)
    }
}

const oldCalc = new OldCalc()
const resOld = oldCalc.calculate('add', 2, 3)
console.log('resOld', resOld)

const newCalc = new NewCalc()
const resNew = newCalc.add(2,3)
const resNew2 = newCalc.sub(9,3)
console.log('resNew', resNew)
console.log('resNew2', resNew2)

const adapter = new CalcAdapter()
const resNewOld = adapter.calculate('add', 2, 3)
console.log('resNewOld', resNewOld)
