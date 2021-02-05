import { hasOwn } from './hasOwn'

export const pickOmitBy = (predicate, object, pick) => {
  const result = {}

  for (const key in object) {
    if (hasOwn(object, key)) {
      const value = object[key]
      const bool = predicate(value, key)
      if (pick ? bool : !bool) {
        result[key] = value
      }
    }
  }

  return result
}
