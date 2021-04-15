import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const forEachU = (fn, map) => {
  for (const [key, value] of map) {
    fn(key, value)
  }

  return map
}

export const forEach = setName(curry2(forEachU), 'forEach')
