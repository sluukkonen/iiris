import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'

export const countU = (fn, array) => {
  let result = 0

  for (const value of array) {
    if (fn(value)) {
      result++
    }
  }

  return result
}

export const count = setName(curry2(countU), 'count')
