export const countU = (fn, array) => {
  let result = 0

  for (const value of array) {
    if (fn(value)) {
      result++
    }
  }

  return result
}
