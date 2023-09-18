const request = (url) => {
    console.log(`new request to ${url}`)
    return {
        url: url,
        data: `ответ с адреса ${url}`
    }
}
const cacheRequests = new Map()
const proxyRequest = new Proxy(request, {
    apply(target, thisArg, argArray) {
        if (cacheRequests.has(argArray[0])) return cacheRequests.get(argArray[0])

        cacheRequests.set(argArray[0], target(argArray[0]))
        return cacheRequests.get(argArray[0])
    }
})

console.log(cacheRequests)
console.log(proxyRequest('/room'))
console.log(proxyRequest('/room22'))
console.log(proxyRequest('/room'))
console.log(proxyRequest('/room33'))
console.log(proxyRequest('/room'))
console.log(cacheRequests)