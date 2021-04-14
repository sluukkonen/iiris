import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { hasU } from './has.js'

const omitU = (keys, object) => {
  const result = {}

  for (const key in object) {
    if (hasU(key, object) && !keys.includes(key)) {
      result[key] = object[key]
    }
  }

  return result
}

export const omit = setName(curry2(omitU), 'omit')
