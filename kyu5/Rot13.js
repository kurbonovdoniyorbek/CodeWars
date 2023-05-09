// My Solution

function rot13(message) {
    const rot13Alphabet = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
    const englishAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    return message.replace(/[a-z]/gi, l => rot13Alphabet[englishAlphabet.indexOf(l)])
}

console.log(rot13("Hello World!"));

// Second Solution 

function rot13(message) {
    let ordenedAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let alphabetPlus13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let indexOfLetter = (letter) => ordenedAlphabet.indexOf(letter)
    let rot13arr = message
        .split("")
        .map(e => indexOfLetter(e) > -1
            ? alphabetPlus13[indexOfLetter(e)]
            : e)
    return rot13arr.join("")
}