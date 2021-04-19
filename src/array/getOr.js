import { curry3 } from '../curry3.js'
import { setName } from '../internal/setName.js'
import { isUndefined } from '../isUndefined.js'
import { getIndex } from './internal/getIndex.js'
import { hasIndex } from './internal/hasIndex.js'

const getOrU = (defaultValue, index, array) => {
  index = getIndex(index, array)

  if (hasIndex(index, array)) {
    const maybeValue = array[index]
    return isUndefined(maybeValue) ? defaultValue : maybeValue
  }
  return defaultValue
}

export const getOr = setName(curry3(getOrU), 'getOr')
