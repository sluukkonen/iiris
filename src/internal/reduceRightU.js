export const reduceRightU = (fn, initial, array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    initial = fn(array[i], initial)
  }

  return initial
}
