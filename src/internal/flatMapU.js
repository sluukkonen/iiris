export const flatMapU = (fn, array) => {
  const result = []

  for (let i = 0; i < array.length; i++) {
    const other = fn(array[i], i)
    pushToArray(other, result)
  }

  return result
}

const pushToArray = (source, target) => {
  for (let i = 0; i < source.length; i++) {
    target.push(source[i])
  }
}
