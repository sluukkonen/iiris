import { isFunction } from '../core/isFunction.js'
import { builtinFromEntries } from '../core/internal/builtins.js'

export const fromEntries = isFunction(builtinFromEntries)
  ? /* istanbul ignore next */ builtinFromEntries
  : /* istanbul ignore next */ function fromEntries(entries) {
      const result = {}

      for (const [key, value] of entries) {
        result[key] = value
      }

      return result
    }
