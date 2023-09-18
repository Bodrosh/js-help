// Добавляют слой метаданных для существующих объектов

class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }
    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

// декоратор принимает instance класса, модифиирует и возвращает его обратно
function aws(server) {
    server.isAWS = true
    server.awsInfo = function () {
        return server.url
    }
    return server
}

// декоратор
function azure(server) {
    server.isAzure = true
    server.port += 500

    return server
}

const s1 = aws(new Server('192.167.1.1', 8080))
console.log(s1.awsInfo(), s1.isAWS)

const s2 = azure(new Server('192.167.1.2', 8080))
console.log(s2.url, s2.isAzure)