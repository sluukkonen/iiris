import { isObject } from '../isObject'
import { numberIsNan } from './builtins'
import { indexOfBy } from './indexOfBy'
import { equalsU } from './equalsU'
import { isSameValueZero } from './isSameValueZero'

export const indexOfU = (value, array) =>
  isObject(value)
    ? indexOfBy(equalsU, value, array)
    : value === 0 || numberIsNan(value)
    ? indexOfBy(isSameValueZero, value, array)
    : array.indexOf(value)
