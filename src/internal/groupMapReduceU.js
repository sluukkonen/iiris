import { hasOwn } from './hasOwn'

export const groupMapReduceU = (reducer, mapFn, keyFn, array) => {
  let result = {}

  for (const value of array) {
    const key = keyFn(value)
    result[key] = hasOwn(result, key)
      ? reducer(result[key], mapFn(value))
      : mapFn(value)
  }

  return result
}
