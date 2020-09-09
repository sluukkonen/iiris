import { hasOwn } from './hasOwn'

export const mapValuesU = (fn, object) => {
  const result = {}

  for (const key in object) {
    if (hasOwn(object, key)) {
      result[key] = fn(object[key], key, object)
    }
  }
  return result
}
