export const flatMapU = (fn, array) => {
  const result = []

  for (const value of array) {
    const other = fn(value)
    for (let i = 0; i < other.length; i++) {
      result.push(other[i])
    }
  }

  return result
}
