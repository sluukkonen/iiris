export const reduceU = (fn, initial, array) => {
  let acc = initial

  for (let i = 0; i < array.length; i++) {
    acc = fn(acc, array[i], i)
  }

  return acc
}
