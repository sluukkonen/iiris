import { isUndefined } from '../isUndefined'

export const groupMapU = (keyFn, mapFn, array) => {
  let result = {}

  for (const value of array) {
    const key = keyFn(value)
    const acc = result[key]
    if (isUndefined(acc)) {
      result[key] = [mapFn(value)]
    } else {
      acc.push(mapFn(value))
    }
  }

  return result
}
