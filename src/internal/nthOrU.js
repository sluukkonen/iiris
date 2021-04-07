import { isUndefined } from '../isUndefined'
import { getIndex } from './getIndex'
import { hasIndex } from './hasIndex'

export const nthOrU = (defaultValue, index, array) => {
  index = getIndex(index, array)

  if (hasIndex(index, array)) {
    const maybeValue = array[index]
    return isUndefined(maybeValue) ? defaultValue : maybeValue
  }
  return defaultValue
}
