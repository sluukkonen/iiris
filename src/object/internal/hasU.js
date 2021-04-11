import { isNil } from '../../core/index.js'
import { hasOwn } from '../../core/internal/index.js'

export const hasU = (key, object) =>
  isNil(object) ? false : hasOwn(object, key)
