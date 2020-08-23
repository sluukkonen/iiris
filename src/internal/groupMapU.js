import { isUndefined } from '../isUndefined'

export const groupMapU = (keyFn, mapFn, array) => {
  let result = {}

  for (let i = 0; i < array.length; i++) {
    const value = array[i]
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
