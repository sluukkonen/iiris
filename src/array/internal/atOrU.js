import { isUndefined } from '../../isUndefined.js'
import { getIndex } from './getIndex.js'
import { hasIndex } from './hasIndex.js'

export const atOrU = (defaultValue, index, array) => {
  index = getIndex(index, array)

  if (hasIndex(index, array)) {
    const maybeValue = array[index]
    return isUndefined(maybeValue) ? defaultValue : maybeValue
  }
  return defaultValue
}
