function converter(mpg) {
    let ig = mpg / 4.54609188
    let fn = ig * 1.609344
    return +fn.toFixed(2)
}