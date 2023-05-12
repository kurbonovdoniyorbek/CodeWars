function changeMe(m) {
    if (m === "£5") return "20p ".repeat(25).trim()
    if (m === "£2") return "20p ".repeat(10).trim()
    if (m === "£1") return "20p ".repeat(5).trim()
    if (m === "20p") return "10p 10p"
    if (m === "50p") return "20p 20p 10p"
    return m
}