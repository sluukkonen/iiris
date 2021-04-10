import { equalsU } from './equalsU'
import { hasOwn } from './hasOwn'

export const propEqualsU = (key, value, object) =>
  hasOwn(object, key) && equalsU(value, object[key])
