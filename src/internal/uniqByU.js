import { isObject } from '../isObject'
import { equalsU } from './equalsU'
import { indexOfBy } from './indexOfBy'

export const uniqByU = (fn, array) => {
  const length = array.length
  const result = []
  const primitives = new Set()
  const objects = []

  for (let i = 0; i < length; i++) {
    const value = array[i]
    const mapped = fn(value)

    if (isObject(mapped)) {
      if (indexOfBy(equalsU, mapped, objects) === -1) {
        objects.push(mapped)
        result.push(value)
      }
    } else if (!primitives.has(mapped)) {
      primitives.add(mapped)
      result.push(value)
    }
  }
  return result
}
