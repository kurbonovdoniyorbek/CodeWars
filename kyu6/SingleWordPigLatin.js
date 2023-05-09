function pigLatin(string) {
    let vowels = /[a,e,i,ou]/
    let numbers = /\d+/;
    let numberVowel = string.search(vowels)
    let checkVowel = vowels.test(string[0])
    let checkNumbers = numbers.test(string)
    return checkNumbers ? null : (!checkVowel ? string.slice(numberVowel, string.length) + string.slice(0, numberVowel) + "ay" : string + "way")
}

//second solution 

function pigLatin(str) {
    str = str.toLowerCase();
    if (/\d/.test(str)) return null;
    if (!(/[aeiou]/.test(str))) return str + 'ay';
    if (/^[aeiou]{1}/.test(str)) return str + 'way';
    if (/^[^aeiou]{1}/.test(str)) return str.replace(/^([^aeiou]+)(\w*)/, '$2$1ay');
}

//third soluton

function pigLatin(s) {
    s = s.toLowerCase();
    return /[^a-z]/.test(s) ? null : /^[aeiou]/.test(s) ? s + "way" : s.replace(/^[^aeiou]+/, "") + s.match(/^[^aeiou]+/) + "ay";
}