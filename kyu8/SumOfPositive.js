function positiveSum(arr) {
    let i = arr.filter((a) => a > 0)
    return i.reduce((a, b) => a + b, 0)
}