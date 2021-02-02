import { isUndefined } from '../isUndefined'
import { isArray } from '../isArray'
import { getIndex } from './getIndex'

export const atOrU = (defaultValue, idx, array) => {
  if (isArray(array)) {
    const index = getIndex(idx, array)
    if (index >= 0 && index < array.length) {
      const maybeValue = array[index]
      return isUndefined(maybeValue) ? defaultValue : maybeValue
    }
  }

  return defaultValue
}
