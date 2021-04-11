import { equalsU, hasOwn } from '../../core/internal/index.js'

export const propEqualsU = (key, value, object) =>
  hasOwn(object, key) && equalsU(value, object[key])
