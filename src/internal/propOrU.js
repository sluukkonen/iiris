import { isObject } from '../isObject'
import { isUndefined } from '../isUndefined'

export const propOrU = (defaultValue, key, object) => {
  if (isObject(object)) {
    const maybeValue = object[key]
    return isUndefined(maybeValue) ? defaultValue : maybeValue
  }

  return defaultValue
}
