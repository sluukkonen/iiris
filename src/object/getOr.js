import { curry3 } from '../curry3.js'
import { setName } from '../internal/setName.js'
import { isUndefined } from '../isUndefined.js'

const getOrU = (defaultValue, key, object) => {
  const maybeValue = object[key]
  return isUndefined(maybeValue) ? defaultValue : maybeValue
}

export const getOr = setName(curry3(getOrU), 'getOr')
