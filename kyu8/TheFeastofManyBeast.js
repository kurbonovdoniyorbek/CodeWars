function feast(bi, di) {
    let b = bi.toLowerCase(),
        d = di.toLowerCase()
    return b[0] == d[0] && b[b.length - 1] == d[d.length - 1]
}