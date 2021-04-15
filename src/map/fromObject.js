import { hasU } from '../object/has.js'
import { empty } from './empty.js'

export const fromObject = (object) => {
  const result = empty()

  for (const key in object) {
    if (hasU(key, object)) {
      result.set(key, object[key])
    }
  }

  return result
}
