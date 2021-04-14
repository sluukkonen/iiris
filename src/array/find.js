import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const findU = (fn, array) => {
  for (const value of array) {
    if (fn(value)) {
      return value
    }
  }
}

export const find = setName(curry2(findU), 'find')
