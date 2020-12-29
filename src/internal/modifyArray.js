import { isUndefined } from '../isUndefined'
import { copyArray } from './copyArray'
import { getIndex } from './getIndex'

export const modifyArray = (idx, fn, array) => {
  const result = copyArray(array)
  const index = getIndex(idx, result)

  if (index < 0 || index >= result.length) {
    throw new RangeError(`Array index is out of bounds: ${idx}`)
  }

  const value = fn(result[index])
  if (isUndefined(value)) {
    result.splice(index, 1)
  } else {
    result[index] = value
  }

  return result
}
