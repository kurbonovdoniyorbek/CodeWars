function isPalindrome(i) {
    let x = i.toLowerCase()
    return x === x.split('').reverse().join('')
}