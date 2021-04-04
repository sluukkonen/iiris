import { getIndex } from './getIndex'
import { setArrayIndex } from './setArrayIndex'
import { hasIndex } from './hasIndex'

export const modifyAtU = (index, fn, array) => {
  index = getIndex(index, array)

  if (hasIndex(index, array)) {
    return setArrayIndex(index, fn(array[index]), array)
  }

  return array
}
