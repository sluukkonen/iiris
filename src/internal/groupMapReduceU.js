import { isUndefined } from '../isUndefined'
import { hasOwn } from './hasOwn'

export const groupMapReduceU = (keyFn, mapFn, reducer, array) => {
  let result = {}

  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    const key = keyFn(value)
    const acc = result[key]
    result[key] =
      isUndefined(acc) && !hasOwn(result, key)
        ? mapFn(value)
        : reducer(acc, mapFn(value))
  }

  return result
}
