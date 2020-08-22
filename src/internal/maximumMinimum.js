export const maximumMinimum = (fn, array, compare) => {
  if (array.length === 0) return undefined
  let acc = fn(array[0])

  for (let i = 1; i < array.length; i++) {
    acc = compare(fn(array[i]), acc)
  }

  return acc
}
