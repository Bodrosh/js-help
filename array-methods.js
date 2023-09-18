const numArr = [0, 1, 1, 2, 3, 5]
console.log(numArr)

// Вставка элементов
numArr.push(13) // return новый length массива и вставляет в конец 13
console.log('--push--', numArr) // [0, 1, 1, 2, 3, 5, 13]

//numArr.unshift(13)  // return новый length массива и вставляет в начало 13
//console.log(numArr) // [13, 0, 1, 1, 2, 3, 5]

// Удаление элементов
// return последний элемент 13 и удаляет его из массива
console.log('--pop--', numArr.pop(), numArr) // [0, 1, 1, 2, 3, 5]

console.log('--shift--', numArr.shift(), numArr) // return 1-й элемент 0 и удаляет его из массива
// [1, 1, 2, 3, 5]

console.log('--reverse--', numArr.reverse()) // [ 5, 3, 2, 1, 1 ]
console.log('--includes--', numArr.includes(23)) // false - есть ли элемент в массиве
console.log('--indexOf--', numArr.indexOf(2)) // 2 - индекс элемента или -1


const strArr = new Array('Привет', 24, 'новое значение')
strArr.unshift(43)
console.log(strArr)


const numArr2 = [1, 2, 3, 4, 5, 6]
console.log(numArr2)
//console.log(numArr2.splice(0, 2))
//console.log(numArr2.splice(-2, 2))
//console.log(numArr2.splice(0, 2, -1, -1))
//----------------------
console.log(numArr2.slice(1,3))
console.log(numArr2)