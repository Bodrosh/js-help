class People {
    static armCount = 2
    static go() {
        console.log('gogo')
    }

    constructor(age, type = 'man') {
        this.age = age
        this.type = type
    }



    get fullAge() {
        return 'Возраст:' + this.age
    }

    set fullAge(val) {
        this.age = val
    }
}

class SportPeople extends People {
    constructor(sport) {
        super(44, 'girl')
        this.sport = sport
    }
}

const people1 = new People(30, 'zh')
console.log(people1.age)
console.log(people1.type)
console.log(people1.fullAge)
console.log(people1.fullAge = 344)
console.log(people1.fullAge)

People.go()

const sport1 = new SportPeople('boxing')
console.log(sport1)
