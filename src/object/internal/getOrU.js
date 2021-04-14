import { isUndefined } from '../../isUndefined.js'

export const getOrU = (defaultValue, key, object) => {
  const maybeValue = object[key]
  return isUndefined(maybeValue) ? defaultValue : maybeValue
}
