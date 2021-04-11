import { isFunction } from '../core/index.js'
import { builtinFromEntries } from '../core/internal/index.js'

export const fromEntries = isFunction(builtinFromEntries)
  ? /* istanbul ignore next */ builtinFromEntries
  : /* istanbul ignore next */ function fromEntries(entries) {
      const result = {}

      for (const [key, value] of entries) {
        result[key] = value
      }

      return result
    }
