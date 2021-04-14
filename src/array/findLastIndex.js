import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

export const findLastIndexU = (fn, array) => {
  let i = array.length

  while (i--) {
    if (fn(array[i])) {
      return i
    }
  }

  return -1
}

export const findLastIndex = setName(curry2(findLastIndexU), 'findLastIndex')
