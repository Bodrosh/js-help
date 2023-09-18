const arr = [9, 5, 4, 7, 4, 0, 7, 0, 0, 18]
const nullArr = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        arr.splice(i, 1)
        nullArr.push(0)
        i--
    }
}
console.log([...arr, ...nullArr])