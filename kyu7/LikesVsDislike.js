function likeOrDislike(b) {
    return b.reduce((a, b) => b == a ? "Nothing" : b, "Nothing")
}