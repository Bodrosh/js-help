/*
Инкапсуляция (сокрытие) - класс - своего рода капсула со своими св-вами и методами
Модификаторы доступа
public (умолч)
private - только для методов внутри класса
В js некоторое соглашение начинать приватные переменные с _ (private _width)
А для их получения можно создавать геттеры и сеттеры
*/

class User {
    private _id
    private name

    constructor(name) {
        this._id = genRandId()
        this._name = name
    }

    get name() { return this._name}
    set name(value) {this._name = value}
    get id() {return this._id}
    // id нельзя менять!
}

Наследование
class Employee extends User {
    constructor(name, inn) {
        super(name) // вызываем род. конструктор
        this.inn = inn
    }
}

Полиморфизм - много форм - один и тот же код может работать с разными типами данных
(Напр., в цикле (Школьник, Старик) вызываем метод двигаться - с виду одинаково, под капотом у них может быть разная реализация - бегать и ползти


Так вот, полиморфизм даёт возможность использовать одни и те же методы для объектов разных классов.
Неважно, как эти объекты устроены, — в ООП можно сказать самолёту и квадрокоптеру: «Лети», и они будут делать это как умеют: квадрокоптер закрутит лопастями, а самолёт начнёт разгон по взлётно-посадочной полосе.

Напр, есть Товар, от него Футболка, Кепка, у них есть метод addToCart


П - способность обьекта использовать методы производного класса, который не существует на момент создания базового.

Напр., есть абстрактный класс Publication, а от него уже class News extends Publication,
и Article extends Publication. Затем можно вызывать $publication->do_print() для разных экземпляров
(переопределяя в дочених работу этой функции)

Параметрический (Истинный)
    ad-hoc (Мнимый) - напр., приведение типов


------------------------------------
------------------------------------
------------------------------------
Взаимодействие между классами

1) Композиция (Автомобиль имеет двигатель и 4 колеса)
2) Агрегация (Автомобиль имеет двигатель и 4 колеса) + Елочка-пахучка (передается из вне)

-----------------------------------
-----------------------------------
    Абстрактные классы и интерфейсы
-----------------------------------

Интерфейс описывает методы, но нет реализации. Из него нельзя сделать объект
interface Reader() {
    read(url)
}

interface Writer() {
    write(url)
}

// Класс должен реализовывать все методы из интерфейса, можно несколько
class FileClient implements Reader, Writer {
    read(url) {...}
    write(url) {...}
}



Абстрактный класс похож, можно объявлять абстрактные методы (без реализации),
но в них можно создавать и обычные методы с реализацией и логикой

Класс, наследуем от абстрактного, унаследует обычные методы и должен реализовать абстрактные