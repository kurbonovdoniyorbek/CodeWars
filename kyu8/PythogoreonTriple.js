function isPythagoreanTriple(i) {
    let b = i.sort((a, b) => a - b)
    return b[0] ** 2 + b[1] ** 2 === b[2] ** 2
}