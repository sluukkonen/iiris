import { hasOwn } from '../../core/internal/index.js'

export const mapValuesU = (fn, object) => {
  const result = {}

  for (const key in object) {
    if (hasOwn(key, object)) {
      result[key] = fn(object[key])
    }
  }

  return result
}
