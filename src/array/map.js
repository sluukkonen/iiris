import { curry2 } from '../curry2.js'
import { builtinArray } from '../internal/builtins.js'
import { setName } from '../internal/setName.js'

const mapU = (fn, array) => {
  const length = array.length
  const result = new builtinArray(length)

  for (let i = 0; i < length; i++) {
    result[i] = fn(array[i])
  }

  return result
}

export const map = setName(curry2(mapU), 'map')
