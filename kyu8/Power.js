function numberToPower(n, p) {
    var r = 1;
    for (let i = 0; i < p; i++) {
        r *= n;
    }
    return r;
}