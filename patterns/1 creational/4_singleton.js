// В приложении есть класс и для него может быть только один instance
// Например, установка соединения с БД - если уже есть, используем созданное
// Порождающий патерн

class Database {
    constructor(data) {
        if (Database.exists) {
            return Database.instance
        }

        Database.instance = this
        Database.exists = true
        this.data = data
    }
    getData() {
        return this.data
    }
}


const mongo = new Database('MongoDB')
console.log(mongo.getData()) // MongoDB

// Т.к. instance уже создан, новый не будет создаваться и возвратится MongoDB
const mysql = new Database('Mysql')
console.log(mysql.getData()) // MongoDB