/*************
    Интерфейсы - некоторый тип, в основном, служит для объектов и классов,
    где мы указываем, какие поля, f-ии, эл-ты будут
    Часто начинаются с I (напр., IClock)
*************/

interface Circle {
    readonly id: string, // неизменяемое
    color?: string, // ? - необязательное поле
    size: {
        width: number,
        height: number
    }
}

const circle1: Circle = {
    id: 'fds42cx',
    size: {
        width: 40,
        height: 40
    }
}

circle1.color = 'red'

// можно указывать к какому типу будет относиться объект
const circle2 = {} as Circle
// или (стар)
const circle3 = <Circle>{}

/***************************
 ** Наследование интерфейсов
 **************************/

interface CircleWithArea extends Circle {
    getArea: () => number
}

const circle4: CircleWithArea = {
    id: 'fsd23',
    size: {
        width: 35,
        height: 35
    },
    getArea(): number {
        return this.size.height * this.size.height
    }
}

// В классах

interface IClock {
    time: Date,
    setTime(date: Date): void
}

// Класс имплементируется от интерфейса (должен реализовать его св-ва и методы)
class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// Когда много динамических ключей у объекта, можно задать общую запись
// key относится к border, marginTop
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid red',
    marginTop: '2px'
}