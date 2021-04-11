import { getIndex } from './getIndex.js'
import { hasIndex } from './hasIndex.js'

export const nthSatisfiesU = (index, fn, array) => {
  index = getIndex(index, array)
  return hasIndex(index, array) && fn(array[index])
}
