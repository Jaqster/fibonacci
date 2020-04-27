let index = 0
function fibonacci (n: number): any {
    if (n <= 2) {
        return Math.min(n, 1)
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
basic.forever(function () {
    index += 1
    basic.clearScreen()
    basic.showNumber(fibonacci(index))
})
