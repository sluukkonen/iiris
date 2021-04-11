import { getIndex } from './getIndex.js'
import { hasIndex } from './hasIndex.js'
import { setArrayIndex } from './setArrayIndex.js'

export const setU = (index, value, array) => {
  index = getIndex(index, array)

  if (hasIndex(index, array)) {
    return setArrayIndex(index, value, array)
  }

  return array
}
