function solve(arr) {
    return arr.find(number => !arr.includes(-number))
};