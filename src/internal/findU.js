export const findU = (fn, array) => {
  for (const value of array) {
    if (fn(value)) {
      return value
    }
  }
}
