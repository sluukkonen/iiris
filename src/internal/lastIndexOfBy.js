export const lastIndexOfBy = (eq, value, array) => {
  let i = array.length

  while (i--) {
    if (eq(value, array[i])) {
      return i
    }
  }

  return -1
}
