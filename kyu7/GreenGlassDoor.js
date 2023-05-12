function stepThroughWith(s) {
    let l = s[0];
    for (let i = 1; i < s.length; i++) {
        if (l === s[i]) return true;
        l = s[i];
    }

    return false;
}