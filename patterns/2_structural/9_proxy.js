// Прокси позволяет ставить ловушки на поля, вызов функций
// Напр., избавление лишних запросов на сервер

function networkFetch(url) {
    return `${url} - ответ с сервера`
}

const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
    // срабатывает при вызове
    apply(target, thisArg, argArray) {
        const url = argArray[0]

        if (cache.has(url)) {
            return `${url} - ответ из кэша`
        }
        cache.add(url)
        return Reflect.apply(target, thisArg, argArray)
    }
})

console.log(proxiedFetch('ya.ru')) // ответ с сервера
console.log(proxiedFetch('ya.ru')) // ответ из кэша
console.log(proxiedFetch('vk.com')) // ответ с сервера
console.log(proxiedFetch('ya.ru'))
console.log(proxiedFetch('vk.com'))
console.log(proxiedFetch('vk.com'))
console.log(proxiedFetch('ya.ru'))

console.log(cache) // Set(2) { 'ya.ru', 'vk.com' }

