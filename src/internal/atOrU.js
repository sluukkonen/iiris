import { isUndefined } from '../isUndefined'
import { getIndex } from './getIndex'

export const atOrU = (defaultValue, idx, array) => {
  const index = getIndex(idx, array)
  if (index >= 0 && index < array.length) {
    const maybeValue = array[index]
    return isUndefined(maybeValue) ? defaultValue : maybeValue
  }
  return defaultValue
}
