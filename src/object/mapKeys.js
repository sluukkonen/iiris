import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { hasU } from './has.js'

const mapKeysU = (fn, object) => {
  const result = {}

  for (const key in object) {
    if (hasU(key, object)) {
      result[fn(key)] = object[key]
    }
  }

  return result
}

export const mapKeys = setName(curry2(mapKeysU), 'mapKeys')
