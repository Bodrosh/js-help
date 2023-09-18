// Product of consecutive Fib numbers - произведение последовательных чисел Фибоначи
// F(n) being the smallest one such as F(n) * F(n+1) > prod.
function productFib(prod){
    const fib = [0, 1]

    for(let i = 2; fib[i-1] < prod; i++) {
        fib.push(fib[i-1] + fib[i-2])

        const mult = fib[i-1] * fib[i]

        if (mult === prod) {
            return [fib[i-1], fib[i], true]
        }
        else if (mult > prod) {
            return [fib[i-1], fib[i], false]
        }
    }
}