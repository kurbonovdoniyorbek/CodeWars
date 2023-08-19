function rakeGarden(garden) {
    const str = garden.split(' ')
    const result = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "gravel" || str[i] === "rock") {
            result.push(str[i])
        }
        else {
            result.push("gravel")
        }
    }
    return result.join(" ");
}