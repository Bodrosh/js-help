// В прошлом в JavaScript не было лексического окружения на уровне блоков кода.
// Поэтому придумали функцию, запускаемую сразу после объявления
// immediately-invoked function expressions»

(function aa($) {
    console.log($)
})('jQuery')



