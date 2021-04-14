import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

export const findIndexU = (fn, array) => {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      return i
    }
  }

  return -1
}

export const findIndex = setName(curry2(findIndexU), 'findIndex')
