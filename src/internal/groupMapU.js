import { isArray } from '../isArray'

export const groupMapU = (mapFn, keyFn, array) => {
  let result = {}

  for (const value of array) {
    const key = keyFn(value)
    const acc = result[key]
    if (isArray(acc)) {
      acc.push(mapFn(value))
    } else {
      result[key] = [mapFn(value)]
    }
  }

  return result
}
