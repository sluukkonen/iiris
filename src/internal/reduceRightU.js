export const reduceRightU = (fn, initial, array) => {
  let acc = initial

  for (let i = array.length - 1; i >= 0; i--) {
    acc = fn(array[i], acc)
  }

  return acc
}
