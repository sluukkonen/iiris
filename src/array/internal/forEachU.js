export const forEachU = (fn, array) => {
  for (const value of array) {
    fn(value)
  }

  return array
}
