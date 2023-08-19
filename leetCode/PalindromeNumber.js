const number = 121

var isPalindrome = function (number) {
    const str = number.toString()
    return +(str.split('').reverse().join("")) === number
};

console.log(isPalindrome(number))