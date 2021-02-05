import { indexOfBy } from './indexOfBy'
import { equalsU } from './equalsU'
import { isObjectLike } from './isObjectLike'

export const includesU = (value, array) =>
  isObjectLike(value)
    ? indexOfBy(equalsU, value, array) !== -1
    : array.includes(value)
