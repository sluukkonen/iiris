export const mapU = (fn, array) => {
  const length = array.length
  const result = new Array(length)

  for (let i = 0; i < length; i++) {
    result[i] = fn(array[i], i)
  }

  return result
}
