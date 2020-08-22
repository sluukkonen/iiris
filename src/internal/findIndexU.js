export const findIndexU = (fn, array) => {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i)) {
      return i
    }
  }

  return -1
}
