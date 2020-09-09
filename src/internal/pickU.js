import { hasOwn } from './hasOwn'

export const pickU = (keys, object) => {
  const result = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (hasOwn(object, key)) {
      result[key] = object[key]
    }
  }

  return result
}
