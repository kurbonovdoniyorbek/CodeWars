var capitals = function (word) {
    let output = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[i].toUpperCase()) {
            output.push(i);
        }
    }
    return output;
};