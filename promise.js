// Решает проблему вложенности:
// Обычный код (получение данных с сервера):

console.log('User request data')
/*
setTimeout(() => {
    const data = {
        name: 'Ivan',
        age: 30
    }
    console.log('Server send data')
    setTimeout(() => {
        console.log('success getting data', data)
        return data
    }, 1000)
}, 1000)
*/


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = {
            name: 'Ivan',
            age: 30
        }
        console.log('Server send data')
        resolve(data)
    }, 1000)
})

promise.then((data) => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(data)
            // reject(data)
         }, 1000)
    )
}).then((data) => {
    console.log('success getting data', data)
}).catch(err => {
    console.error('err', err)
})


const sleep = (ms) => new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve()
    }, ms)
)

sleep(2000).then(() => {
    console.log('sleep 1')
})

sleep(3000).then(() => {
    console.log('sleep 2')
})

Promise.all([sleep(2000), sleep(7000)])
    .then(() => console.log('All promises'))
