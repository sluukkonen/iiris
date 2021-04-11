export const reduceRightU = (fn, initial, array) => {
  let i = array.length

  while (i--) {
    initial = fn(array[i], initial)
  }

  return initial
}
