// запуск ts: tsc typeScript/1_types.ts
// запуск js: node typeScript/1_types.js
/*************
** Типы данных
*************/
var str = 'Hello';
console.log(str);
var isLoading = false;
var int = 28;
//int = 'строка' // Ошибка, т.к. тип не соответствует
var float = 2.8;
var num = 3e10;
// массив опр. типа значений
var numArr = [1, 2, 3, 4, 5];
// или то же самое, другая запись (generic тип)
var numArr2 = [1, 2, 3, 4, 5];
var strArr = ['Hello', 'world'];
// Tuple
var contact = ['Ivan', 28];
// Any - когда нужно переопределять тип переменной
var variable = 28;
variable = 'toString';
// Для параметра и возвращаемого значения можно указать тип
function sayName(name) {
    console.log(name);
}
sayName('Ivan');
// Never - когда f-ия возвращает ошибку или не завершается
function throwErr(message) {
    throw new Error(message);
}
var login1 = 'Ivan';
var id1 = '14cvxv23';
var id2 = 23242;
