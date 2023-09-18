// observer - наблюдатель
// формирует зависимость 1 ко многим (наблюдатель, диспатчер, лисенер)
// идея - есть 1 обьект, у которого можем затригерить вызов изменений
// и все обьекты, подписанные на изменения, получают эти обновления и делают свой функционал

//Еще пример: Издатель — это объект который публикует что-то интересное и важное, Подписчик — тот кто следит за этими обновлениями и в зависимости от оповещения Издателя(Observable) выполняет свои действия.

// Используется в RxJS, Angular

// Observable - наблюдаемый
class Observable {
    constructor() {
        this.observers = []
    }

    // observer в простом случаем может быть функцией
    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    // emit, fire
    notify(action) {
        this.observers.forEach(observer => {
            observer.update(action)
        })
    }
}

// наблюдатель
class Observer {
    constructor(state = 1) {
        this.state = state
        this.initState = state
    }

    update(action) {
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state
                break
            case 'DECREMENT':
                this.state = --this.state
                break
            case 'ADD':
                this.state += action.payload
                break
            default:
                this.state = this.initState
        }
    }
}

const stream$ = new Observable()

// создаем объекты
const obs1 = new Observer()
const obs2 = new Observer(30)

// подписываемся на стрим
stream$.subscribe(obs1)
stream$.subscribe(obs2)

// у одного события вызываем событие и диспатч одного события изменяет все подписки
stream$.notify({type: 'INCREMENT'})
stream$.notify({type: 'INCREMENT'})
stream$.notify({type: 'DECREMENT'})
stream$.notify({type: 'ADD', payload: 5})

console.log(obs1.state)
console.log(obs2.state)