const draw = (deck) => {
    const r = []
    while (1 < deck.length) {
        r.push(deck.shift())
        deck.push(deck.shift())
    }
    return r.concat(deck)
}


draw(["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"])