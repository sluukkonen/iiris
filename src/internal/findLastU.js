import { findLastIndexU } from './findLastIndexU'

export const findLastU = (fn, array) => {
  const index = findLastIndexU(fn, array)
  return index !== -1 ? array[index] : undefined
}
