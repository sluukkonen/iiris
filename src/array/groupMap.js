import { curry3 } from '../curry3.js'
import { setName } from '../internal/setName.js'
import { hasU } from '../object/has.js'

const groupMapU = (mapFn, keyFn, array) => {
  let result = {}

  for (const value of array) {
    const key = keyFn(value)
    if (hasU(key, result)) {
      result[key].push(mapFn(value))
    } else {
      result[key] = [mapFn(value)]
    }
  }

  return result
}

export const groupMap = setName(curry3(groupMapU), 'groupMap')
