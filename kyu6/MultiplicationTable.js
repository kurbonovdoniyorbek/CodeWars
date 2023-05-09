multiplicationTable = function (s) {
    let arr = [];
    for (let i = 1; i <= s; i++) {
        let t = [];
        for (let j = 1; j <= s; j++) {
            t.push(i * j)
        }
        arr.push(t)
    }
    return arr
}

console.log(multiplicationTable(3));