var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// В классах есть всё то же, что и в ES6 классах + указываем типы:
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return name + " typescript: " + this.version;
    };
    return Typescript;
}());
// Можно указывать readonly
var Car = /** @class */ (function () {
    // поля readonly можно перезаписать только внутри конструктора
    function Car(model) {
        this.wheelsCount = 4;
        this.model = model;
    }
    return Car;
}());
// более короткая запись
var Car1 = /** @class */ (function () {
    function Car1(model) {
        this.model = model;
        this.wheelsCount = 4;
    }
    return Car1;
}());
// Модификаторы (public, protected, private
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = ''; // доступны в классе, и наследумых
        this.color = 'black'; // по умолчанию, public можно не писать
    }
    Animal.prototype.go = function () {
        console.log('go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
//cat.voice  protected, нельзя получить
cat.setVoice('myauuuuuuu');
console.log(cat);
