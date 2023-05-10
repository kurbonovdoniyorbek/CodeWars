function largest(n, array) {
    return array.sort((a, b) => a - b).slice(array.length - n)
}


console.log(
    largest(2, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
);