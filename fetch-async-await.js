// Последовательный вывод (раб. в браузере)

/*
// с await
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await res.json()
}

console.log('before')
const data = await getData()
console.log(data[0])

console.log('after')
*/


console.log('before')
function getData() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => data)
}
const data = await getData()
console.log(data[0])

console.log('after')