const [a, b = null, c] = [3,, 1 ,5]
console.log('a', a) // 3
console.log('b', b) // null (или undefined, если бы не было значения по умолч)
console.log('c', c) // 1

const {name: name1, age, ...other22} = {name: "Ivan", age: 34, width: 43, height: 53}
console.log(name1, age, other22)

function calc(a, b) {
    return [
        //undefined,
        a + b,
        a - b,
        a * b,
        a / b,
        a ** b
    ]
}

// Чтобы не писать каждый раз отдельно, можно записать так (деструктуризация):
const [sum, sub] = calc(3, 5)
console.log(sum, sub)

// МОжно пропустить индекс и не создавать доп. переменных
const [sum1,, mult] = calc(3, 5)
console.log(sum1, mult)

// Rest и Spread - противоположны, rest - объединяет в массив, spread - распаковывает

// Можно остальные собрать в отдельный массив (rest)
const [sum2,, mult2, ...other] = calc(3, 5)
console.log(sum2, mult2, other)

// Можно задать умолчание (если undefined)
const [sum3 = 5,...other2] = calc(3, 5)
console.log(sum3, other2)

// Можно поменять местами переменные
let a11 = 23;
let a22 = 54;
[a11, a22] = [a22, a11];

// Аналогично с объектами
const person = {
    name: 'Ivan',
    age4: 30,
    address: {
        street: 'Nevskaya',
        home: 23
    }
}

// можно получить вложенные объекты:
const {
    name: pName,
    age4,
    address: {
        street,
        home
    }
} = person

console.log(pName, age4, street) // Ivan 30 Nevskaya


// Можно использовать rest
const {name, ...info} = person
console.log(name, info) // Ivan { age4: 30, address: { street: 'Nevskaya', home: 23 } }

// Практика
function log({name, age4}) {
    console.log(name, age4)
}
log(person)