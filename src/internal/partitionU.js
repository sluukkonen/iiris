export const partitionU = (predicate, array) => {
  const trues = []
  const falses = []

  for (const value of array) {
    const target = predicate(value) ? trues : falses
    target.push(value)
  }

  return [trues, falses]
}
