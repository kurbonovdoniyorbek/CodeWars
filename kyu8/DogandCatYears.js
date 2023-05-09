var humanYearsCatYearsDogYears = function (hu) {
    if (hu === 1) {
        return [1, 15, 15]
    }
    if (hu === 2) {
        return [2, 24, 24]
    }
    return [hu, 24 + (hu - 2) * 4, 24 + (hu - 2) * 5];
}