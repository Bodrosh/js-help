/*************
    Интерфейсы - некоторый тип, в основном, служит для объектов и классов,
    где мы указываем, какие поля, f-ии, эл-ты будут
    Часто начинаются с I (напр., IClock)
*************/
var circle1 = {
    id: 'fds42cx',
    size: {
        width: 40,
        height: 40
    }
};
circle1.color = 'red';
// можно указывать к какому типу будет относиться объект
var circle2 = {};
// или (стар)
var circle3 = {};
var circle4 = {
    id: 'fsd23',
    size: {
        width: 35,
        height: 35
    },
    getArea: function () {
        return this.size.height * this.size.height;
    }
};
// Класс имплементируется от интерфейса (должен реализовать его св-ва и методы)
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid red',
    marginTop: '2px'
};
