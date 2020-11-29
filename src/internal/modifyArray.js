import { isArray } from '../isArray'
import { isUndefined } from '../isUndefined'
import { copyArray } from './copyArray'
import { getIndex } from './getIndex'

export const modifyArray = (idx, fn, array) => {
  const result = isArray(array) ? copyArray(array) : []
  const index = getIndex(idx, result)
  const value = fn(result[index])

  if (isUndefined(value)) {
    if (index >= 0) result.splice(index, 1)
  } else {
    if (index < 0) {
      const newElems = new Array(-index)
      newElems[0] = value
      result.unshift(...newElems)
    } else {
      result[index] = value
    }
  }

  return result
}
