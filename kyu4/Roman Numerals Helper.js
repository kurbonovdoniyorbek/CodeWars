var RomanNumerals = {
    table: { "I": 1, "IV": 4, "V": 5, "IX": 9, "X": 10, "XL": 40, "L": 50, "XC": 90, "C": 100, "CD": 400, "D": 500, "CM": 900, "M": 1000 },
    findRoman: function (n) {
        let max = "I";
        for (var key in this.table) {
            if ((n >= this.table[key]) && (this.table[key] > this.table[max])) {
                max = key;
            }
        }
        return max;
    },
    toRoman: function (n) {
        let roman = "";
        let next = "";
        while (n > 0) {
            next = this.findRoman(n);
            n -= this.table[next];
            roman += next;
        }
        return roman;
    },
    fromRoman: function (s) {
        let roman = 0;
        Object.keys(this.table).reverse().forEach(function (key) {
            while (s.indexOf(key) === 0) {
                roman += this.table[key];
                s = s.replace(key, '');
            }
        }, this);
        return roman;
    }
};