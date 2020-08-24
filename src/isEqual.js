import { isObject } from './isObject'
import { isEqualU } from './internal/isEqualU'
import { isSameValueZero } from './internal/isSameValueZero'

export function isEqual(a, b) {
  // Optimize the curried isEqual(...) case.
  return arguments.length < 2
    ? !isObject(a)
      ? function isEqual1(b) {
          return isSameValueZero(a, b)
        }
      : function isEqual1(b) {
          return isEqualU(a, b)
        }
    : isEqualU(a, b)
}
