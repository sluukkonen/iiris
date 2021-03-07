import { hasOwn } from './hasOwn'

export const pickU = (keys, object) => {
  const result = {}

  for (const key of keys) {
    if (hasOwn(object, key)) {
      result[key] = object[key]
    }
  }

  return result
}
