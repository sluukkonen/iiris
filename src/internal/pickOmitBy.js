import { hasOwn } from './hasOwn'

export const pickOmitBy = (predicate, object, pick) => {
  const result = {}

  for (const key in object) {
    if (hasOwn(object, key)) {
      const value = object[key]
      if (pick ? predicate(value, key) : !predicate(value, key)) {
        result[key] = value
      }
    }
  }

  return result
}
