function arraysSimilar(arr1, arr2) {
    arr1 = arr1.sort((a, b) => a - b)
    arr2 = arr2.sort((a, b) => a - b)
    return arr1.length > arr2.length ? arr1.every((a, i) => a === arr2[i]) : arr2.every((a, i) => a === arr1[i])
}