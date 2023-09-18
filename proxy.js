// Object
const person = {
    age: 28,
    city: 'Moscow'
}

const proxy = new Proxy(person, {
    get(target, p, receiver) {
        console.log('получаем св-во')
        return target[p]
    }
})

console.log(proxy.age)


// Function

const log = (text) => console.log(`log ${text}`)
const fnProxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        return target.apply(thisArg, argArray)
    }
})

fnProxy('da')



class Person {
    constructor(age, name) {
        this.age = age
        this.name = name
    }
}

const clProxy = new Proxy(Person, {
    construct2(target, argArray, newTarget) {
        //console.log(target, argArray, newTarget)
        return new target(...argArray)
    },
    // или сразу обернуть в новый прокси и уже новые ловушки
    construct(target, argArray, newTarget) {
        //console.log(target, argArray, newTarget)
        return new Proxy(new target(...argArray), {
            get(target, p, receiver) {
                console.log('aaa', target[p])
                return target[p]
            }
        })
    },

})

const obj = new clProxy(28, 'Ivan')
console.log(obj.age)