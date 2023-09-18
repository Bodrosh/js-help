function arrayDiff(a, b) {
    if (a.length === 0) return a

    b.forEach(bItem => {
        a = a.filter(aItem => aItem !== bItem)
    })

    return a
}