const arr = ['a', 'b', 'c', 'd', 'e', 'f']
for (let item of arr) {
    console.log('for of', item)
}

// some - удовл. ли какой-либо элемент заданному условию
arr.some(item => {
    if (item === 'd') {
        console.log('Has d')
        return true // метод завершает работу после true
    }
})

console.log("В массиве есть числа", arr.some(item => typeof item === 'number' ))

// map преобразование массива
const numArr = [3, 5, 6, 2, 34, 23]
console.log(numArr.map(item => item ** 2))
console.log(numArr.filter(item => item > 5))
console.log(numArr.reduce((acc, cur) => {
    return acc += cur
}, 0))