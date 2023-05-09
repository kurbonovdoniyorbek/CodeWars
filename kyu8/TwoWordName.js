function abbrevName(name) {
    let n = name.toUpperCase().split(' ')
    return n[0][0] + "." + n[1][0]
}