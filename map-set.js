/*
 * Структура данных Get
 */

const obj = {
    name: 'Ivan',
    age: 30,
    job: 'Web'
}

const objArr = [
    ['name', 'Ivan'],
    ['age', 30],
    ['job', 'Web']
]

//console.log(Object.entries(obj))
//console.log(Object.fromEntries(objArr))

const map = new Map(objArr)
console.log(map)

// В map в качестве ключей могут быть различные типы данных, напр., обьекты
map
    .set('newField', 42)
    .set(obj, 'new object')
    .set(NaN, 'NaN ??')
// М можно получать по ним значения
map.get('name')
map.get(obj)


//map.delete('job') // Удаляем ключи
//console.log(map.has('job'))
//console.log(map.size)
//map.clear() // Очищаем карту
//console.log(map.size)

// можно map.forEach
for (let [key, val] of map.entries()) { // entries не обяз вызывать или можно по ключам map.keys()
//    console.log(key, val)
}

// Из Карты в массив
//console.log([...map]) // или
//console.log(Array.from(map))

//////// Использование (напр., время авторизации пользователя)

const users = [
    {name: 'Ivan'},
    {name: 'Andrey'}
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))

const lastVisit = (user) => visits.get(user)

//console.log(lastVisit(users[0]))
//console.log(lastVisit(users[1]))

/*
 * Структура данных Set
 */

const set = new Set([1,2,3,1,2,4,35,53,3])
// Оставляет уникальные значения
console.log(set) // Set(6) { 1, 2, 3, 4, 35, 53 }

// Те же методы, что и у Get
// set.add(20)
// console.log(set.has(20))
// console.log(set.size)
// console.log(set.delete(20))
// set.clear()

//set.keys() == set.values()   - Эта структура (Set) проще, чем Get

// Примеры

const uniqueVals = (arr) => [...new Set(arr).values()].sort((a, b) => a - b)

const res = uniqueVals([43,32,1,12,1,2,3,43])
console.log('res', res)


/*
 * WeakMap и WeakSet
 */

let john = { name: "John" } // объект доступен, переменная john -- это ссылка на него
john = null // объект будет удалён из памяти

// но
let john1 = { name: "John" }
let array = [ john1 ]
john1 = null // перезаписываем ссылку на объект
// объект john хранится в массиве, поэтому он не будет удалён сборщиком мусора
// мы можем взять его значение как array[0]


// Отсюда и пояились WeakMap и WeakSet
//Ключи в WeakMap должны быть объектами, а не примитивными значениями

// const map2 = new WeakMap([
//     [obj, 'obj data']
// ])
//
// obj = null
// объект john удалён из памяти!

const cache = new WeakMap()
function cacheUser(user) {
    if (!cache.get(user)) {
        cache.set(user, Date.now())
    }
    return  cache.get(user)
}

let use1 = {name: 'Ivan'}
let use2 = {name: 'Lena'}


cacheUser(use1)
cacheUser(use2)
use2 = null

console.log(cache.has(use1))
console.log(cache.has(use2)) // Автоматически память была очищенна и возвращается false

// WeakSet - похожим образом





