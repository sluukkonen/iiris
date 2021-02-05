import { numberIsNan } from './builtins'
import { equalsU } from './equalsU'
import { isObjectLike } from './isObjectLike'
import { isSameValueZero } from './isSameValueZero'
import { lastIndexOfBy } from './lastIndexOfBy'

export const lastIndexOfU = (value, array) =>
  isObjectLike(value)
    ? lastIndexOfBy(equalsU, value, array)
    : value === 0 || numberIsNan(value)
    ? lastIndexOfBy(isSameValueZero, value, array)
    : array.lastIndexOf(value)
