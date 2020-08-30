export const findLastIndexU = (fn, array) => {
  let i = array.length

  while (i--) {
    if (fn(array[i], i, array)) {
      return i
    }
  }

  return -1
}
