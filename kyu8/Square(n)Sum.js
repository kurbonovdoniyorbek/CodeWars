function squareSum(n) {
    let count = 0
    for (let i = 0; i < n.length; i++) {
        count += Math.pow(n[i], 2)
    }
    console.log(count);
}

squareSum([1, 2])