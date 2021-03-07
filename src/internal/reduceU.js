export const reduceU = (fn, initial, array) => {
  let acc = initial

  for (const value of array) {
    acc = fn(acc, value)
  }

  return acc
}
