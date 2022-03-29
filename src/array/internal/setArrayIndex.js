import { isUndefined } from '../../isUndefined.js'
import { copyArray } from './copyArray.js'

export const setArrayIndex = (index, value, array) => {
  const result = copyArray(array)
  if (isUndefined(value)) {
    result.splice(index, 1)
  } else {
    result[index] = value
  }
  return result
}
