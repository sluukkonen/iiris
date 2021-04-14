import { hasOwn } from '../../internal/hasOwn.js'

export const pickU = (keys, object) => {
  const result = {}

  for (const key of keys) {
    if (hasOwn(key, object)) {
      result[key] = object[key]
    }
  }

  return result
}
