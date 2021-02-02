import { isUndefined } from '../isUndefined'
import { isObject } from '../isObject'

export const propOrU = (defaultValue, key, object) => {
  if (isObject(object)) {
    const maybeValue = object[key]
    return isUndefined(maybeValue) ? defaultValue : maybeValue
  }

  return defaultValue
}
