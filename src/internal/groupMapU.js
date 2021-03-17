import { hasOwn } from './hasOwn'

export const groupMapU = (mapFn, keyFn, array) => {
  let result = {}

  for (const value of array) {
    const key = keyFn(value)
    if (hasOwn(result, key)) {
      result[key].push(mapFn(value))
    } else {
      result[key] = [mapFn(value)]
    }
  }

  return result
}
