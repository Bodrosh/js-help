// Все вызовы игнорируется, пока не пройдет опр. период времени (сбрасываются, поиск по сайту)
const brDebounce = (fn, delay = 1000) => {
    let timeOut = null

    return function(...args) {
        clearTimeout(timeOut)
        timeOut = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

const brThrottle = (fn, delay = 1000) => {
    let timeOut = null

    return function(...args) {
        if (!timeOut) {
            timeOut = setTimeout(() => {
                fn.apply(this, args)
                timeOut = null
            }, delay)
        }
    }
}