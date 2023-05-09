function isOddHeavy(n) {
    let oddNumbers = n.filter((e) => e % 2 != 0).sort()
    let evenNumbers = n.filter((o) => o % 2 == 0).sort((a, b) => a - b)
    if (!oddNumbers.length) return false
    return evenNumbers.every(v => v < oddNumbers[0])
}

console.log(isOddHeavy([10, 19, 13, 2, 4, 4]))