import { builtinFromEntries } from './internal/builtins'
import { isFunction } from './isFunction'

export const fromEntries = isFunction(builtinFromEntries)
  ? /* istanbul ignore next */ builtinFromEntries
  : /* istanbul ignore next */ function fromEntries(entries) {
      const result = {}

      for (const [key, value] of entries) {
        result[key] = value
      }

      return result
    }
