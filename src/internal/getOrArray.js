import { isUndefined } from '../isUndefined'
import { isArray } from '../isArray'

export const getOrArray = (defaultValue, index, array) => {
  if (isArray(array)) {
    const maybeValue = array[index]
    return isUndefined(maybeValue) ? defaultValue : maybeValue
  }

  return defaultValue
}
