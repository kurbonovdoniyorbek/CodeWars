function solution(inp, m) {
    var c = inp.split('\n');
    for (var i in m) {
        for (var j in c) {
            var idx = c[j].indexOf(m[i]);
            if (idx >= 0) {
                c[j] = c[j].substring(0, idx).trim();
            }
        }
    }
    return c.join('\n');
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));