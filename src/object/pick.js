import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { hasU } from './has.js'

const pickU = (keys, object) => {
  const result = {}

  for (const key of keys) {
    if (hasU(key, object)) {
      result[key] = object[key]
    }
  }

  return result
}

export const pick = setName(curry2(pickU), 'pick')
