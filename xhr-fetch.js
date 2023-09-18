const url = 'https://jsonplaceholder.typicode.com/posts'
//
// const xhr = new XMLHttpRequest()
// xhr.open('GET', url)
// xhr.onload = () => {
//     console.log(JSON.parse(xhr.response))
// }
// xhr.send()



const sendRequest = (url, method = 'GET', body = null) => {
    const headers = {
        'Content-Type': 'application/json'
    }
    const params = {
        method: method,
        headers: headers
    }
    if (method === 'POST') {
        params.body = JSON.stringify(body)
    }

    return fetch(url, params)
    .then(response => {
        if (response.ok) {
            return response.json()
        }

        return  response.json().then(error => {
            const e = new Error('Что-то пошло не так')
            e.data = error
            throw e
        })
    })
}


sendRequest(url, 'GET')
    .then(res => {
        console.log(res)
    })

const body = {
    name: 'Andrey',
    age: 30
}
sendRequest(url, 'POST', body)
    .then(res => {
        console.log(res)
    })