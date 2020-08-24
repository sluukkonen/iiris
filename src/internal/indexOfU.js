import { isObject } from '../isObject'
import { numberIsNan } from './builtins'
import { indexOfBy } from './indexOfBy'
import { isEqualU } from './isEqualU'
import { isSameValueZero } from './isSameValueZero'

export const indexOfU = (value, array) =>
  isObject(value)
    ? indexOfBy(isEqualU, value, array)
    : value === 0 || numberIsNan(value)
    ? indexOfBy(isSameValueZero, value, array)
    : array.indexOf(value)
