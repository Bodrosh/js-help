var arr = [1, 2, 3, 4]; // обычный
var arrOfNumbers = [1, 2, 3, 4]; // generic
var arrOfStrings = ['hello', 'word']; // generic
// Массив может состоять из разных типов, напр., из строк, чисел и т.п.
// Указываем, что f-ия работает с типом <T>, принимает массив T[] и возвращает массив типа T
// Т.е. мы указали некоторый generic тип, кот. будет подстраиваться
function reverse(arr) {
    return arr.reverse();
}
console.log(reverse(arrOfNumbers));
console.log(reverse(arrOfStrings));
