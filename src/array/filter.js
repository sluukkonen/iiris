import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const filterU = (fn, array) => {
  const result = []

  for (const value of array) {
    if (fn(value)) {
      result.push(value)
    }
  }

  return result
}

export const filter = setName(curry2(filterU), 'filter')
