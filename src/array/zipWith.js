import { curry3 } from '../curry3.js'
import { builtinArray } from '../internal/builtins.js'
import { setName } from '../internal/setName.js'
import { minU } from '../min.js'

const zipWithU = (fn, array1, array2) => {
  const length = minU(array1.length, array2.length)
  const result = new builtinArray(length)

  for (let i = 0; i < length; i++) {
    result[i] = fn(array1[i], array2[i])
  }

  return result
}

export const zipWith = setName(curry3(zipWithU), 'zipWith')
