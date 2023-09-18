// соискатель
class JobSeeker {
    constructor(name) {
        this.name = name
    }
    onJobPosted(vacancy) {
        console.log(`${this.name}, новая вакансия ${vacancy}`)
    }
}

class JobInfo {
    constructor() {
        this.observers = []
    }
    subscribe(observer) {
        this.observers.push(observer)
    }
    addJob(vacancy) {
        this.observers.forEach(i => i.onJobPosted(vacancy))
    }
}

const observer1 = new JobSeeker('Vasya')
const observer2 = new JobSeeker('Ivan')

const jobInfo = new JobInfo()
jobInfo.subscribe(observer1)
jobInfo.subscribe(observer2)

jobInfo.addJob('Программист')
jobInfo.addJob('Контент-менеджер')

