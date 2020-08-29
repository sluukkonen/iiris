import { isUndefined } from '../isUndefined'
import { isObject } from '../isObject'
import { hasOwn } from './hasOwn'

export const getOrObject = (defaultValue, key, object) => {
  if (isObject(object)) {
    const maybeValue = object[key]
    return isUndefined(maybeValue) && !hasOwn(object, key)
      ? defaultValue
      : maybeValue
  }

  return defaultValue
}
