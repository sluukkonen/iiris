import { findLastIndexU } from './findLastIndexU.js'

export const findLastU = (fn, array) => {
  const index = findLastIndexU(fn, array)
  return index !== -1 ? array[index] : undefined
}
