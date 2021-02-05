export const everyU = (fn, array) => {
  for (let i = 0; i < array.length; i++) {
    if (!fn(array[i])) {
      return false
    }
  }

  return true
}
