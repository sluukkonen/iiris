import { getIndex } from './getIndex'
import { setArrayIndex } from './setArrayIndex'

export const setAtU = (index, value, array) => {
  index = getIndex(index, array)

  if (index >= 0 && index < array.length) {
    return setArrayIndex(index, value, array)
  }

  return array
}
