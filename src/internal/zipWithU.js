import { builtinArray } from './builtins'
import { minU } from './minU'

export const zipWithU = (fn, array1, array2) => {
  const length = minU(array1.length, array2.length)
  const result = new builtinArray(length)

  for (let i = 0; i < length; i++) {
    result[i] = fn(array1[i], array2[i])
  }

  return result
}
