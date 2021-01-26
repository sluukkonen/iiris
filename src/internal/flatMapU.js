export const flatMapU = (fn, array) => {
  const result = []

  for (let i = 0; i < array.length; i++) {
    const other = fn(array[i], i, array)
    for (let j = 0; j < other.length; j++) {
      result.push(other[j])
    }
  }

  return result
}
