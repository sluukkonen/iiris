export const reduceU = (fn, initial, array) => {
  for (const value of array) {
    initial = fn(initial, value)
  }

  return initial
}
