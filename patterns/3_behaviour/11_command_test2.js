// receiver -
class Computer {
    start() {
        console.log('com start')
    }
    stop() {
        console.log('com stop')
    }
}

// Invoker
class User {
    constructor(commands) {
        this.commands = commands
    }
    execute(command) {
        const commandObj = this.commands.find(commandObj => commandObj.commandName === command)
        if (commandObj) {
            commandObj.execute()
        }
    }
}

// start command (конкретная команда)
class StartCommand {
    constructor(computer) {
        this.computer = computer
        this.commandName = 'start'
    }
    execute() {
        this.computer.start()
    }
}

// Stop command (конкретная команда)
class StopCommand {
    constructor(computer) {
        this.computer = computer
        this.commandName = 'stop'
    }
    execute() {
        this.computer.stop()
    }
}

const computer =new Computer()
const user = new User([
    new StartCommand(computer),
    new StopCommand(computer)
])

user.execute('start')
user.execute('stop')