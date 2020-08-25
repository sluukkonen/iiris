import { isObject } from '../isObject'
import { indexOfBy } from './indexOfBy'
import { equalsU } from './equalsU'

export const includesU = (value, array) =>
  isObject(value)
    ? indexOfBy(equalsU, value, array) !== -1
    : array.includes(value)
