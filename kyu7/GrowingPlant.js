function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let currentHeight = 0;
    for (var i = 1; ; i++) {
        currentHeight += upSpeed;
        if (currentHeight >= desiredHeight) {
            return i
        }
        else {
            currentHeight -= downSpeed;
        }
    }
}