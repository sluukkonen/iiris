import { getIndex } from './getIndex.js'
import { hasIndex } from './hasIndex.js'
import { setArrayIndex } from './setArrayIndex.js'

export const modifyU = (index, fn, array) => {
  index = getIndex(index, array)

  if (hasIndex(index, array)) {
    return setArrayIndex(index, fn(array[index]), array)
  }

  return array
}
