export const partitionU = (predicate, array) => {
  const trues = []
  const falses = []

  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    const target = predicate(value, i, array) ? trues : falses
    target.push(value)
  }

  return [trues, falses]
}
