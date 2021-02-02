import { isUndefined } from '../isUndefined'
import { copyArray } from './copyArray'
import { getIndex } from './getIndex'

export const modifyAtU = (idx, fn, array) => {
  const result = copyArray(array)
  const index = getIndex(idx, array)

  if (index >= 0 && index < array.length) {
    const value = fn(array[index])
    if (isUndefined(value)) {
      result.splice(index, 1)
    } else {
      result[index] = value
    }
  }

  return result
}
