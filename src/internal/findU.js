export const findU = (fn, array) => {
  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    if (fn(value, i)) {
      return value
    }
  }
}
