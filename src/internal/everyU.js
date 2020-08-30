export const everyU = (fn, array) => {
  for (let i = 0; i < array.length; i++) {
    if (!fn(array[i], i, array)) {
      return false
    }
  }

  return true
}
