function fn1(val1) {
    let a = val1

    return function (b = 5) {
        console.log('a = ', a, 'b = ', b)
    }
}

const newF = fn1(25)

newF(53)