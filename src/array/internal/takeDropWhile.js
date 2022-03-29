import { sliceU } from './sliceU.js'

export const takeDropWhile = (fn, array, take, last) => {
  const length = array.length
  let i = last ? length : -1

  // eslint-disable-next-line no-empty
  while ((last ? i-- : ++i < length) && fn(array[i])) {}

  return take
    ? sliceU(last ? i + 1 : 0, last ? length : i, array)
    : sliceU(last ? 0 : i, last ? i + 1 : length, array)
}
