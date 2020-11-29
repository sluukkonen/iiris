import { isUndefined } from '../isUndefined'
import { isArray } from '../isArray'
import { getIndex } from './getIndex'

export const getOrArray = (defaultValue, idx, array) => {
  if (isArray(array)) {
    const maybeValue = array[getIndex(idx, array)]
    return isUndefined(maybeValue) ? defaultValue : maybeValue
  }

  return defaultValue
}
