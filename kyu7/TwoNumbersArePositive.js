function twoArePositive(a, b, c) {
    return a > 0 && b > 0 && c <= 0 || c > 0 && b > 0 && a <= 0 || a > 0 && c > 0 && b <= 0
}