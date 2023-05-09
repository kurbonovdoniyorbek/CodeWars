class Dictionary {
    constructor() {
        this.d = {};
    }

    newEntry(k, v) {
        this.d[k] = v;
    }

    look(k) {
        return this.d[k] || `Can\'t find entry for ${k}`;
    }
}