import { getIndex } from './getIndex'
import { hasIndex } from './hasIndex'

export const nthSatisfiesU = (index, fn, array) => {
  index = getIndex(index, array)
  return hasIndex(index, array) && fn(array[index])
}
