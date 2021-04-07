import { getIndex } from './getIndex'
import { setArrayIndex } from './setArrayIndex'
import { hasIndex } from './hasIndex'

export const setNthU = (index, value, array) => {
  index = getIndex(index, array)

  if (hasIndex(index, array)) {
    return setArrayIndex(index, value, array)
  }

  return array
}
