import { hasOwn } from '../../internal/hasOwn.js'

export const mapKeysU = (fn, object) => {
  const result = {}

  for (const key in object) {
    if (hasOwn(key, object)) {
      result[fn(key)] = object[key]
    }
  }

  return result
}
