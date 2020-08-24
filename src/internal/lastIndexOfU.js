import { isObject } from '../isObject'
import { numberIsNan } from './builtins'
import { isEqualU } from './isEqualU'
import { isSameValueZero } from './isSameValueZero'
import { lastIndexOfBy } from './lastIndexOfBy'

export const lastIndexOfU = (value, array) =>
  isObject(value)
    ? lastIndexOfBy(isEqualU, value, array)
    : value === 0 || numberIsNan(value)
    ? lastIndexOfBy(isSameValueZero, value, array)
    : array.lastIndexOf(value)
