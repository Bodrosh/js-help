class Computer {
    startCooler() {
        console.log('ffffffff')
    }
    startSound() {
        console.log('start sound')
    }
    showStartScreen() {
        console.log('show start screen')
    }
}

class ComputerFacade {
    constructor(computer) {
        this.computer = computer
    }
    turnOn() {
        this.computer.startSound()
        this.computer.startCooler()
        this.computer.showStartScreen()
    }
}

(new ComputerFacade(new Computer)).turnOn()