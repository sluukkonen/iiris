export const mapU = (fn, array) => {
  const result = new Array(array.length)

  for (let i = 0; i < array.length; i++) {
    result[i] = fn(array[i], i)
  }

  return result
}
