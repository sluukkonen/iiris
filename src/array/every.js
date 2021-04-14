import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const everyU = (fn, array) => {
  for (const value of array) {
    if (!fn(value)) {
      return false
    }
  }

  return true
}

export const every = setName(curry2(everyU), 'every')
