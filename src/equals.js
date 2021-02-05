import { equalsU } from './internal/equalsU'
import { isSameValueZero } from './internal/isSameValueZero'
import { isObjectLike } from './internal/isObjectLike'

export function equals(a, b) {
  // Optimize the curried isEqual(...) case.
  return arguments.length < 2
    ? !isObjectLike(a)
      ? function equals1(b) {
          return isSameValueZero(a, b)
        }
      : function equals1(b) {
          return equalsU(a, b)
        }
    : equalsU(a, b)
}
