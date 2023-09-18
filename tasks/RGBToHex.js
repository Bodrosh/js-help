function rgb(r, g, b){
    const min = 0
    const max = 255
    const arr = [r, g, b]
    let res = ''

    arr.forEach(i => {
        if (i < min) i = min
        if (i > max) i = max

        let hex = i.toString(16)
        if (hex.length === 1) hex = '0' + hex

        res += hex.toUpperCase()
    })

    return res
}