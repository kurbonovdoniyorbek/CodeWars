function uniTotal(string) {
    let arr = string.slice(' ')
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr.charCodeAt(i))
    }
    console.log(!string ? 0 : result.reduce((a, b) => a + b));
}

uniTotal("aaa")