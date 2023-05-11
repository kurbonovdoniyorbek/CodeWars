function describeAge(a) {
  let i = "You're a(n) "
  return a <= 12 ? i + "kid" : a >= 13 && a <= 17 ? i + "teenager" : a >= 18 && a <= 64 ? i + "adult" : i + "elderly"
}