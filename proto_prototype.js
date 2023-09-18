/*
    Es - объектный язык, основной f-нал за счет объектов, а программа - совокупность общающихся объектов
    6 Примитивов - undefined, null, string, number, boolean, Symbol
    Остальное - объекты (сложный тип)
    Функция - вызываемый объект, => f-ии можно присвоить св-ва и методы
 */

function Person() {}
console.log(Person.prototype)
console.log(Person.prototype.constructor)
console.log(Person.prototype.constructor)
console.log(Person)

const albert = new Person()
console.log(albert.__proto__ === Person.prototype) // проверка на идентичность, благодаря этому насследоване

Person.boolProp = true
Person.prototype.age = 32
Person.prototype.city = 'Moscow'
Object.prototype.sayHello = function() {
    console.log('Hello', this.city)
}

console.log('albert', albert.city)

console.log('----------------------')
// prototype - есть только у классов и функций, __proto__ почти у всего
const ivan = {name: 'Ivan'}
console.log('ivan.prototype', ivan.prototype) // undefined, т.к. это обьект, а не клас или ф-ия
console.log('ivan.__proto__', ivan.__proto__) // Object.prototype

class Car {}

console.log('Car.prototype', Car.prototype) // есть
console.log(Car.__proto__ === Function.prototype) // true, т.е. класс это функция (сахар)

let bmw = new Car()
console.log('bmw.prototype', bmw.prototype) //  undefined, т.к. это обьект, а не клас или ф-ия
console.log('bmw.__proto__', bmw.__proto__ === Car.prototype) // true

let lada = new Car()
console.log('bmw.__proto__ === lada.__proto__', bmw.__proto__ === lada.__proto__) // true
console.log('__proto__.__proto__', bmw.__proto__.__proto__ === Object.prototype) // true
console.log('__proto__.constructor.__proto__', bmw.__proto__.constructor.__proto__ === Function.prototype) // true
console.log('__proto__.__proto__.__proto__', bmw.__proto__.__proto__.__proto__) // null

const components = () => {}
console.log('() => {} has prototype', components.prototype)  //  undefined, у стрелочных функци прототипа нет
console.log(components.__proto__ === Function.prototype)  //  true

