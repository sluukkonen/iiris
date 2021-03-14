export const forEachIndexedU = (fn, array) => {
  for (let i = 0; i < array.length; i++) {
    fn(i, array[i])
  }

  return array
}
