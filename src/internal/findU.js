import { findIndexU } from './findIndexU'

export const findU = (fn, array) => {
  const index = findIndexU(fn, array)
  return index !== -1 ? array[index] : undefined
}
