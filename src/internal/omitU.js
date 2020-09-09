import { hasOwn } from './hasOwn'

export const omitU = (keys, object) => {
  const result = {}

  for (const key in object) {
    if (hasOwn(object, key) && !keys.includes(key)) {
      result[key] = object[key]
    }
  }

  return result
}
