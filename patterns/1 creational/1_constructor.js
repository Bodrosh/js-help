class Server {
    constructor(name) {
        this.name = name
    }

    getUrl() {
        return `https://${this.name}`
    }
}

const aws = new Server('ya.ru')
console.log(aws.getUrl())