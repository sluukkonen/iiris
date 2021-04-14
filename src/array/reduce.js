import { curry3 } from '../curry3.js'
import { setName } from '../internal/setName.js'

const reduceU = (fn, initial, array) => {
  for (const value of array) {
    initial = fn(initial, value)
  }

  return initial
}

export const reduce = setName(curry3(reduceU), 'reduce')
