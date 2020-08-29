import { isString } from './isString'
import { getU } from './internal/getU'
import { isObject } from './isObject'
import { isArray } from './isArray'
import { throwInvalidKeyError } from './internal/throwInvalidKeyError'
import { isArrayIndex } from './internal/isArrayIndex'

export function get(key, target) {
  return arguments.length < 2
    ? isString(key)
      ? function get1(object) {
          return isObject(object) ? object[key] : undefined
        }
      : isArrayIndex(key)
      ? function get1(array) {
          return isArray(array) ? array[key] : undefined
        }
      : throwInvalidKeyError(key)
    : getU(key, target)
}
