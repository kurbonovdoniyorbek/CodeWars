function disemvowel(s) {
    const v = /[aeiou]/gi
    return s.replace(v, "");
}