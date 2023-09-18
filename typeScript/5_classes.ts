// В классах есть всё то же, что и в ES6 классах + указываем типы:
class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `${name} typescript: ${this.version}`
    }
}

// Можно указывать readonly

class Car {
    readonly model: string
    readonly wheelsCount: number = 4

    // поля readonly можно перезаписать только внутри конструктора
    constructor(model: string) {
        this.model = model
    }
}

// более короткая запись
class Car1 {
    readonly wheelsCount: number = 4
    constructor(readonly model: string) {}
}

// Модификаторы (public, protected, private
class Animal {
    protected voice: string = '' // доступны в классе, и наследумых
    public color: string = 'black' // по умолчанию, public можно не писать
    private go() { // доступны только в том классе, где опредены
        console.log('go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
//cat.voice  protected, нельзя получить
cat.setVoice('myauuuuuuu')

console.log(cat)

/*************
 ** Абстрактные классы - нужны на этапе разработки, чтобы от них наследоваться,
 ** ( они не компилируются)
 *************/

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {}
    info(): string {
        return ""
    }
}

