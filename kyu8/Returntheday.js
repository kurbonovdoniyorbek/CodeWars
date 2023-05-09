function whatday(num) {
    let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if (num >= 1 && num <= 7) {
        return weeks[num - 1]
    }
    else {
        return "Wrong, please enter a number between 1 and 7"
    }
}