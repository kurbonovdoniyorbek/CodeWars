function validatePIN(pin) {
    return /^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6)
}

// return will be true or false