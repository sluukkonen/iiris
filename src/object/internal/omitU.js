import { hasOwn } from '../../core/internal/hasOwn.js'

export const omitU = (keys, object) => {
  const result = {}

  for (const key in object) {
    if (hasOwn(key, object) && !keys.includes(key)) {
      result[key] = object[key]
    }
  }

  return result
}
