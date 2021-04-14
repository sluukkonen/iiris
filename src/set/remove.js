import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { hasU } from './has.js'
import { copySet } from './internal/copySet.js'

const removeU = (value, set) => {
  if (hasU(value, set)) {
    const result = copySet(set)
    result.delete(value)
    return result
  }

  return set
}

export const remove = setName(curry2(removeU), 'remove')
