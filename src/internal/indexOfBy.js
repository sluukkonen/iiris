export const indexOfBy = (eq, value, array) => {
  for (let i = 0; i < array.length; i++) {
    if (eq(value, array[i])) {
      return i
    }
  }

  return -1
}
