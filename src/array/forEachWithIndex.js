import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

export const forEachWithIndexU = (fn, array) => {
  for (let i = 0; i < array.length; i++) {
    fn(i, array[i])
  }

  return array
}

export const forEachWithIndex = setName(
  curry2(forEachWithIndexU),
  'forEachWithIndex'
)
