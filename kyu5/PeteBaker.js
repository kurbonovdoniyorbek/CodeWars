function cakes(r, a) {
    let c = 0
    while (true) {
        for (let i in r) {
            if (!a[i]) {
                return c
            }
            if (a[i] - r[i] < 0) {
                return c
            }
            else {
                a[i] -= r[i]
            }
        }
        c++
    }
}
