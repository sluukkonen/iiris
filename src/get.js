import { isString } from './isString'
import { getU } from './internal/getU'
import { isObject } from './isObject'
import { isArray } from './isArray'
import { throwInvalidKeyError } from './internal/throwInvalidKeyError'
import { getIndex } from './internal/getIndex'
import { numberIsInteger } from './internal/builtins'

export function get(key, target) {
  return arguments.length < 2
    ? isString(key)
      ? function get1(object) {
          return isObject(object) ? object[key] : undefined
        }
      : numberIsInteger(key)
      ? function get1(array) {
          return isArray(array) ? array[getIndex(key, array)] : undefined
        }
      : throwInvalidKeyError(key)
    : getU(key, target)
}
