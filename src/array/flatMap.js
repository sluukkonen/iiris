import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

export const flatMapU = (fn, array) => {
  const result = []

  for (const value of array) {
    const other = fn(value)
    for (let i = 0; i < other.length; i++) {
      result.push(other[i])
    }
  }

  return result
}

export const flatMap = setName(curry2(flatMapU), 'flatMap')
