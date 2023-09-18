function bmwProducer(type) {
   return type === 'sport' ? SportCarFactory : HomeCarFactory
}

function SportCarFactory() {
    return new Z4()
}

function HomeCarFactory() {
    return new X5()
}

class Z4 {
    info() {
        return 'Z4 is sport car'
    }
}
class X5 {
    info() {
        return 'X5 is home car'
    }
}

const produce = bmwProducer('sport')
const myCar = new produce()

console.log(myCar.info()) // Z4 is sportcar