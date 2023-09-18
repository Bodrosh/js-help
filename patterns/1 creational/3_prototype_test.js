const obj = {
    name: 'Ivan',
    age: 25,
    getAge: function () {
        return `${this.age} лет`
    }
}

const newObj = Object.create(obj, {
    job: {
        value: 'Moryachok'
    }
})

console.log(obj.getAge())
console.log(newObj.job)