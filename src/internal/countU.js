export const countU = (fn, array) => {
  let result = 0

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      result++
    }
  }

  return result
}
