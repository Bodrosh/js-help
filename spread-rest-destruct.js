const citiesRussia = ['Казань', 'Ростов', 'Оскол']
const citiesEurope = ['London', 'Liverpool', 'Barcelona']

console.log(citiesRussia)
console.log(citiesEurope)

// Spread - разворачивает массивы или объекты

//
console.log(...citiesRussia) // разворачивает массив (убирает его) и возвращает строки Казань Ростов Оскол

// Применение:

// Массивы:
// 1) Клонирование массива - будет новая ссылка, т.е. копия массива
const allCities = [...citiesRussia]
console.log(allCities) //  ['Казань', 'Ростов', 'Оскол']

// 2) Обьединение массивов
const allCities2 = [...citiesRussia, 'Калуга', ...citiesEurope]
console.log(allCities2) //  ['Казань', 'Ростов', 'Оскол', 'Калуга', 'London', 'Liverpool', 'Barcelona']

// Объекты:

citiesRusPeopleCounts = {
    Moscow: 20,
    Kazan: 2
}
citiesEurPeopleCounts = {
    London: 5,
    Barcelona: 3
}


// 1) Клонирование объекта - будет новая объект, т.е. копия
console.log({...citiesRusPeopleCounts})

// 2) Объединение в новый объект:
console.log({...citiesRusPeopleCounts, ...citiesEurPeopleCounts})
// Здесь есть умный merge, т.е. если ключи совпадут, значение применится из последнего объекта


// Практика (применение)
const max = Math.max(3,5,3,1,13,32,3,5)
console.log(max)
// Не моэем передать массив, но можем развернуть (раньше можно было через apply):
const max_arr = [3,5,3,1,13,32,3,5]
console.log(Math.max(...max_arr))


// Работа с DOM
//const divs = document.querySelectorAll('div')
// Сейчас это NodeList, не все методы доступны (напр., нет .map)
// Можем преобразовать в массив
//const divsArr = [...divs]


/*
 * Rest - другая область применения - собирает все параметры в массив или в объект
 */

// ...other - rest - он собирает аргкменты в массив
function sum(a, b, ...other) {
    return a + b + other.reduce((a, i) => a + i, 0)
}

// Массив не можем передать, развернем в параметры: а = 3, b = 4, other = [5,6,7]
// Здесь работает как spread
console.log(sum(...[3,4,5,6,7]))


// деструктуризация (rest)
const numbers = [3,5,3,1,13,32,3,5]
//const a = numbers[0]
//const b = numbers[1]
// Можно записать иначе (ES6):

const [a, b, ...other] = numbers
console.log(a, b, other) // 3 5 [ 3, 1, 13, 32, 3, 5 ]

// Аналогично для объектов
const person = {
    name: 'Max',
    age: 20,
    city: 'Oskol',
    job: 'OMK'
}

const {name, age, ...otherObj} = person
console.log(name, age, otherObj) // Max 20 { city: 'Oskol', job: 'OMK' }






