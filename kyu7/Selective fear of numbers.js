var AmIAfraid = function (day, num) {
    if (num === 12 && day === "Monday") {
        return true
    }
    if (num > 95 && day === "Tuesday") {
        return true
    }
    if (num === 34 && day === "Wednesday") {
        return true
    }

    if (num === 0 && day === "Thursday") {
        return true
    }

    if (num % 2 === 0 && day === "Friday") {
        return true
    }

    if (num === 56 && day === "Saturday") {
        return true
    }
    if ((num === -666 || num === 666) && day === "Sunday") {
        return true
    }
    return false
}