import { isFunction } from './isFunction'

export const fromEntries = isFunction(Object.fromEntries)
  ? /* istanbul ignore next */ Object.fromEntries
  : /* istanbul ignore next */ function fromEntries(entries) {
      const result = {}

      for (const [key, value] of entries) {
        result[key] = value
      }

      return result
    }
