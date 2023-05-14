function shortcut(string) {
    let vowels = /[aeiou]/g;
    return string.replaceAll(vowels, '')
}