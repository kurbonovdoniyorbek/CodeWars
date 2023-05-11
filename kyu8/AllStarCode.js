function strCount(s, l) {
    let check = s.includes(l)
    let a = s.replaceAll(l, "")
    return !check ? 0 : s.length - a.length
}

strCount("Hello", 'o');