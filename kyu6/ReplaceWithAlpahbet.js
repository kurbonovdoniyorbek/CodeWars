function alphabetPosition(text) {
    let arr = []
    let textLower = text.toLowerCase()
    for (let i = 0; i < textLower.length; i++) {
        let c = textLower.charCodeAt(i)
        if (c >= 97 && c <= 122) {
            arr.push(c - 96)
        }
    }
    return arr.join(' ')
}
