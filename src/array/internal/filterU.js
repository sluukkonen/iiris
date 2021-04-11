export const filterU = (fn, array) => {
  const result = []

  for (const value of array) {
    if (fn(value)) {
      result.push(value)
    }
  }

  return result
}
