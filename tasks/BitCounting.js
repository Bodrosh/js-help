// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
var countBits = function(n) {
    let res = ''

    while(n > 1) {
        res += (n % 2 === 0) ? 0 : 1
        n = Math.floor(n / 2)
    }
    res += n

    return res.split('').reduce((acc, v) => acc + Number(v), 0)
}