interface Person {
    name: string,
    age: number
}

type PersonKeys = keyof Person
let key: PersonKeys = "name"
key = "age"
//key = 'job' // ошибка

// Если ходим создать новый тип, но не использовать какие-то поля
type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserWithoutIdAndEmail = Exclude<keyof User, '_id' | 'email'> // останется name и createdAt
// или наоборот, каке поля нужны
type UserWithoutIdAndEmail2 = Pick<User, 'name' | 'createdAt'> // останется name и createdAt

let u1: UserWithoutIdAndEmail = "name"
//u1 = '_id' // ошибка