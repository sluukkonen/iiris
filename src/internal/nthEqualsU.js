import { getIndex } from './getIndex'
import { equalsU } from './equalsU'
import { hasIndex } from './hasIndex'

export const nthEqualsU = (value, index, array) => {
  index = getIndex(index, array)
  return hasIndex(index, array) && equalsU(value, array[index])
}
