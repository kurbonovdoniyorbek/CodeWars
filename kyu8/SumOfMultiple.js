function sumMul(n, m) {
    if (n >= m) return "INVALID"
    let count = 0
    let num = n
    do {
        count += num
        num += n
    }
    while (num < m)
    return count
}