import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const filterWithIndexU = (fn, array) => {
  const result = []

  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    if (fn(i, value)) {
      result.push(value)
    }
  }

  return result
}

export const filterWithIndex = setName(
  curry2(filterWithIndexU),
  'filterWithIndex'
)
