var filterString = function (value) {
    var regex = /[a-zA-Z]/g;
    const num = value.replaceAll(regex, "")
    return +num
}