import { curry3 } from '../curry3.js'
import { setName } from '../internal/setName.js'
import { getIndex } from './internal/getIndex.js'
import { hasIndex } from './internal/hasIndex.js'
import { setArrayIndex } from './internal/setArrayIndex.js'

export const setU = (index, value, array) => {
  index = getIndex(index, array)

  if (hasIndex(index, array)) {
    return setArrayIndex(index, value, array)
  }

  return array
}

export const set = setName(curry3(setU), 'set')
