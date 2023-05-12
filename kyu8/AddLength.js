function addLength(str) {
    let arr = []
    str.split(' ').map((r) => {
        arr.push(`${r} ${r.length}`)
    })
    return arr
}