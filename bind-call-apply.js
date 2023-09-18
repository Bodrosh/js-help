function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const bind = (person) => {
    //return logPerson.bind(person)() //v1
    //return logPerson.call(person) //v2
    return logPerson.apply(person) //v3
}

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = {name: 'Елена', age: 19, job: 'SMM'}

bind(person1)
bind(person2)