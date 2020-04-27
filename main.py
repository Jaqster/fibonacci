function fibonacci (n: number): any {
    if (n <= 2) {
        return Math.min(n, 1)
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
basic.forever(function () {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(fibonacci(index))
    }
})
