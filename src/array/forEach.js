import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const forEachU = (fn, array) => {
  for (const value of array) {
    fn(value)
  }

  return array
}

export const forEach = setName(curry2(forEachU), 'forEach')
