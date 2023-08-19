function chooseBestSum(t, k, ls) {
    let choice = [];
    let maxSum = -1;
    const bestSum = (a, b) => Math.abs(t - a) < Math.abs(t - b) ? a : b
    const recurse = function (i, j) {
        for (i; i <= ls.length - k + j; i++) {
            choice[j] = ls[i];
            if (j == (k - 1)) {
                let tot = choice.reduce((acc, e) => acc + e, 0);
                if (tot <= t)
                    maxSum = Math.max(tot, maxSum);
            } else {
                recurse(i + 1, j + 1);
            }
        }
    }
    recurse(0, 0);
    return maxSum > -1 ? maxSum : null;
}