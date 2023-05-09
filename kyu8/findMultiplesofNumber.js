function findMultiples(integ, l) {
    let r = []
    for (let i = integ; i <= l; i += integ) {
        r.push(i)
    }
    return r
}