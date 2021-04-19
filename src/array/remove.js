import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { getIndex } from './internal/getIndex.js'
import { hasIndex } from './internal/hasIndex.js'
import { copyArray } from './internal/copyArray.js'

const removeU = (index, array) => {
  index = getIndex(index, array)

  if (hasIndex(index, array)) {
    const result = copyArray(array)
    result.splice(index, 1)
    return result
  }

  return array
}

export const remove = setName(curry2(removeU), 'remove')
