function spacey(array) {
    let r = []
    let t = array[0]
    for (let i = 1; i < array.length + 1; i++) {
        r.push(t)
        t = t + array[i]
    }
    return r
}
