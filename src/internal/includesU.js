import { isObject } from '../isObject'
import { indexOfBy } from './indexOfBy'
import { isEqualU } from './isEqualU'

export const includesU = (value, array) =>
  isObject(value)
    ? indexOfBy(isEqualU, value, array) !== -1
    : array.includes(value)
