export const mapIndexedU = (fn, array) => {
  const length = array.length
  const result = new Array(length)

  for (let i = 0; i < length; i++) {
    result[i] = fn(i, array[i])
  }

  return result
}
