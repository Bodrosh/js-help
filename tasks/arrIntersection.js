const first = [1, 2, 3, 4]
const second = [3, 4, 5, 6]


const intersection = (a, b) => {
    const res = []
    first.forEach(item => {
        if (b.includes(item)) res.push(item)
    })

    return res
}

console.log(intersection(first, second))