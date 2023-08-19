function battle(x, y) {
    let f = x.split('').reduce((a, b) => a + (b.charCodeAt() - 64), 0)
    let s = y.split('').reduce((a, b) => a + (b.charCodeAt() - 64), 0)
    return f > s ? x : s > f ? y : 'Tie!'
}