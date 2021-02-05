export const forEachU = (fn, array) => {
  for (let i = 0; i < array.length; i++) {
    fn(array[i])
  }

  return array
}
