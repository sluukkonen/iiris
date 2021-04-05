import { equalsU } from './equalsU'
import { hasOwn } from './hasOwn'

export const propEqualsU = (value, key, object) =>
  hasOwn(object, key) && equalsU(value, object[key])
