import { isFunction } from './isFunction'

export const fromEntries = isFunction(Object.fromEntries)
  ? /* istanbul ignore next */ Object.fromEntries
  : /* istanbul ignore next */ function fromEntries(entries) {
      const result = {}

      for (let i = 0; i < entries.length; i++) {
        const [key, value] = entries[i]
        result[key] = value
      }

      return result
    }
