import { curry3 } from '../curry3.js'
import { setName } from '../internal/setName.js'
import { getIndex } from './internal/getIndex.js'
import { hasIndex } from './internal/hasIndex.js'
import { setArrayIndex } from './internal/setArrayIndex.js'

const modifyU = (index, fn, array) => {
  index = getIndex(index, array)

  if (hasIndex(index, array)) {
    return setArrayIndex(index, fn(array[index]), array)
  }

  return array
}

export const modify = setName(curry3(modifyU), 'modify')
