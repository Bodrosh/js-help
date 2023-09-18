// запуск ts: tsc typeScript/1_types.ts
// запуск js: node typeScript/1_types.js

/*************
** Типы данных
*************/
const str: string = 'Hello'
console.log(str)

const isLoading: boolean = false
let int: number = 28
//int = 'строка' // Ошибка, т.к. тип не соответствует
const float: number = 2.8
const num: number = 3e10

// массив опр. типа значений
const numArr: number[] = [1,2,3,4,5]
// или то же самое, другая запись (generic тип)
const numArr2: Array<number> = [1,2,3,4,5]
const strArr: string[] = ['Hello', 'world']

// Tuple
const contact: [string, number] = ['Ivan', 28]

// Any - когда нужно переопределять тип переменной
let variable: any = 28
variable = 'toString'

// Для параметра и возвращаемого значения можно указать тип
function sayName(name: string): void {
    console.log(name)
}
sayName('Ivan')

// Never - когда f-ия возвращает ошибку или не завершается
function throwErr(message: string): never {
    throw new Error(message)
}

// function infinity(): never {
//     while(true) {}
// }

// Type - для создания собственных типов (алиас - для наглядного понимания)
type Login = string
const login1: Login = 'Ivan'
//const login2: Login = 28 // ошибка типа

type ID = string | number
const id1: ID = '14cvxv23'
const id2: ID = 23242
//const id3: ID = false // ошибка типа

// null и undefined
type SomeType = string | null | undefined