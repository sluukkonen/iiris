export const filterWithIndexU = (fn, array) => {
  const result = []

  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    if (fn(i, value)) {
      result.push(value)
    }
  }

  return result
}
