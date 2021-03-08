import { isUndefined } from '../isUndefined'
import { hasOwn } from './hasOwn'

export const groupMapReduceU = (reducer, mapFn, keyFn, array) => {
  let result = {}

  for (const value of array) {
    const key = keyFn(value)
    const acc = result[key]
    result[key] =
      isUndefined(acc) && !hasOwn(result, key)
        ? mapFn(value)
        : reducer(acc, mapFn(value))
  }

  return result
}
