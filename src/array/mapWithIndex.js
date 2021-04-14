import { curry2 } from '../curry2.js'
import { builtinArray } from '../internal/builtins.js'
import { setName } from '../internal/setName.js'

const mapWithIndexU = (fn, array) => {
  const length = array.length
  const result = new builtinArray(length)

  for (let i = 0; i < length; i++) {
    result[i] = fn(i, array[i])
  }

  return result
}

export const mapWithIndex = setName(curry2(mapWithIndexU), 'mapWithIndex')
