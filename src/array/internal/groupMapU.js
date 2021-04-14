import { hasOwn } from '../../core/internal/hasOwn.js'

export const groupMapU = (mapFn, keyFn, array) => {
  let result = {}

  for (const value of array) {
    const key = keyFn(value)
    if (hasOwn(key, result)) {
      result[key].push(mapFn(value))
    } else {
      result[key] = [mapFn(value)]
    }
  }

  return result
}
