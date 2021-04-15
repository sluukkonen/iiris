import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { hasU } from './has.js'
import { copyMap } from './internal/copyMap.js'

const removeU = (key, map) => {
  if (hasU(key, map)) {
    const result = copyMap(map)
    result.delete(key)
    return result
  }

  return map
}

export const remove = setName(curry2(removeU), 'remove')
