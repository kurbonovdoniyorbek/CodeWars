space = function (i) {
    return 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'.substr(i + 1)
}

device.decode = function (w) {
    return w.split('').map(function (a, i) {
        var spacer = space(i)
        return device.encode(spacer + a)[64 - i]
    }).join('');
}


"https://youtu.be/mv3oZEk7rpw" - "YouTube"