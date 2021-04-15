import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { empty } from './empty.js'

const mapKeysU = (fn, map) => {
  const result = empty()

  for (const [key, value] of map) {
    result.set(fn(key), value)
  }

  return result
}

export const mapKeys = setName(curry2(mapKeysU), 'mapKeys')
