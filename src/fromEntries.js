import { objectFromEntries } from './internal/builtins'
import { isFunction } from './isFunction'

export const fromEntries = isFunction(objectFromEntries)
  ? /* istanbul ignore next */ objectFromEntries
  : /* istanbul ignore next */ function fromEntries(entries) {
      const result = {}

      for (const [key, value] of entries) {
        result[key] = value
      }

      return result
    }
