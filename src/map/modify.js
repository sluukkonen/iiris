import { curry3 } from '../curry3.js'
import { setName } from '../internal/setName.js'
import { hasU } from './has.js'
import { setU } from './set.js'

const modifyU = (key, fn, map) => {
  if (hasU(key, map)) {
    return setU(key, fn(map.get(key)), map)
  }

  return map
}

export const modify = setName(curry3(modifyU), 'modify')
