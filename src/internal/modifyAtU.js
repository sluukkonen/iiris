import { getIndex } from './getIndex'
import { setArrayIndex } from './setArrayIndex'

export const modifyAtU = (index, fn, array) => {
  index = getIndex(index, array)

  if (index >= 0 && index < array.length) {
    return setArrayIndex(index, fn(array[index]), array)
  }

  return array
}
