function lovefunc(f, f2) {
  if ((f % 2 != 0 && f2 % 2 === 0) || (f2 % 2 != 0 && f % 2 === 0))
    return true
  return false
}