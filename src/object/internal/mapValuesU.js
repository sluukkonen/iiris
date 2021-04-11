import { hasOwn } from '../../core/internal/index.js'

export const mapValuesU = (fn, object) => {
  const result = {}

  for (const key in object) {
    if (hasOwn(object, key)) {
      result[key] = fn(object[key])
    }
  }

  return result
}
