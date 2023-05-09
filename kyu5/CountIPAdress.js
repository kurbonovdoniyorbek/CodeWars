function ipToNum(ip) {
    return ip.split('.').reduce((sum, x) => sum << 8 | x, 0) >>> 0;
}

function ipsBetween(start, end) {
    return ipToNum(end) - ipToNum(start);
}