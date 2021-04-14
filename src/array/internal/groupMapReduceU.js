import { hasOwn } from '../../core/internal/hasOwn.js'

export const groupMapReduceU = (reducer, mapFn, keyFn, array) => {
  let result = {}

  for (const value of array) {
    const key = keyFn(value)
    result[key] = hasOwn(key, result)
      ? reducer(result[key], mapFn(value))
      : mapFn(value)
  }

  return result
}
