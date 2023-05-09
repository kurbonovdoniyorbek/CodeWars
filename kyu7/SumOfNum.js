function getSum(a, b) {
    const min = a < b ? a : b;
    const max = a < b ? b : a;

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}