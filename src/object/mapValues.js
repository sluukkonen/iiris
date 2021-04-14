import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { hasU } from './has.js'

const mapValuesU = (fn, object) => {
  const result = {}

  for (const key in object) {
    if (hasU(key, object)) {
      result[key] = fn(object[key])
    }
  }

  return result
}

export const mapValues = setName(curry2(mapValuesU), 'mapValues')
