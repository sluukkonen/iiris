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
          if (isArray(array)) {
            const index = getIndex(key, array)
            if (index >= 0 && index < array.length) {
              return array[index]
            }
          }
        }
      : throwInvalidKeyError(key)
    : getU(key, target)
}
