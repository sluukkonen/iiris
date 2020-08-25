import { isObject } from '../isObject'
import { numberIsNan } from './builtins'
import { equalsU } from './equalsU'
import { isSameValueZero } from './isSameValueZero'
import { lastIndexOfBy } from './lastIndexOfBy'

export const lastIndexOfU = (value, array) =>
  isObject(value)
    ? lastIndexOfBy(equalsU, value, array)
    : value === 0 || numberIsNan(value)
    ? lastIndexOfBy(isSameValueZero, value, array)
    : array.lastIndexOf(value)
