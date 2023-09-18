export default class Post {
    constructor(title, logo) {
        this.title = title
        this.date = (new Date()).getTime()
        this.logo = logo
    }
    toString() {
        //return JSON.stringify(this)
        return JSON.stringify(this, null, 2) // Для красивого вывода
    }
    toUpperCase() {
        return this.title.toUpperCase()
    }
    toLoverCase() {
        return this.title.toLoverCase()
    }
}