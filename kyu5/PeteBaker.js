function cakes(r, a) {
    let c = 0
    while (true) {
        for (let i in r) {
            if (!a) {
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


console.log(
    cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 })
);  // must return