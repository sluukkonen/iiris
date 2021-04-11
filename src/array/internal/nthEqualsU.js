import { equalsU } from '../../core/internal/index.js'
import { getIndex } from './getIndex.js'
import { hasIndex } from './hasIndex.js'

export const nthEqualsU = (index, value, array) => {
  index = getIndex(index, array)
  return hasIndex(index, array) && equalsU(value, array[index])
}
