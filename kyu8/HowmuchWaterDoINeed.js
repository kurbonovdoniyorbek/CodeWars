function howMuchWater(w, l, c) {
    if (c > l * 2) return "Too much clothes"
    if (c < l) return "Not enough clothes"
    return +(w * 1.1 ** (c - l)).toFixed(2)
}