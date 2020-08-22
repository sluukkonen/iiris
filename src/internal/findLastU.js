export const findLastU = (fn, array) => {
  let i = array.length
  while (i--) {
    const value = array[i]
    if (fn(value, i)) {
      return value
    }
  }
}
