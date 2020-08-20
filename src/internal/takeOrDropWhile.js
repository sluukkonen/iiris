import { sliceU } from './sliceU'

export const takeDropWhile = (array, fn, take) => {
  const length = array.length
  let i = 0

  while (i < length && fn(array[i], i)) i++

  return take ? sliceU(0, i, array) : sliceU(i, length, array)
}
