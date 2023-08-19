function noBoringZeros(n) {
    return +`${n}`.replace(/0+$/, "")
}