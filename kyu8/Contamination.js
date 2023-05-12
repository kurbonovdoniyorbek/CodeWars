function contamination(text, char) {
    return text.length === 0 || char.lenght === 0 ? "" : char.repeat(text.length)
}