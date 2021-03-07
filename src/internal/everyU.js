export const everyU = (fn, array) => {
  for (const value of array) {
    if (!fn(value)) {
      return false
    }
  }

  return true
}
