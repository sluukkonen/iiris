import { isArray } from '../isArray'
import { isUndefined } from '../isUndefined'
import { copyArray } from './copyArray'

export const modifyArray = (index, fn, array) => {
  const result = isArray(array) ? copyArray(array) : []
  const value = fn(result[index])

  if (isUndefined(value)) {
    result.splice(index, 1)
  } else {
    result[index] = value
  }

  return result
}
