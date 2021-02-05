import { numberIsNan } from './builtins'
import { indexOfBy } from './indexOfBy'
import { equalsU } from './equalsU'
import { isSameValueZero } from './isSameValueZero'
import { isObjectLike } from './isObjectLike'

export const indexOfU = (value, array) =>
  isObjectLike(value)
    ? indexOfBy(equalsU, value, array)
    : value === 0 || numberIsNan(value)
    ? indexOfBy(isSameValueZero, value, array)
    : array.indexOf(value)
