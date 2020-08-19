import { isNil } from '../isNil'
import { hasOwn } from './hasOwn'

export const hasU = (key, object) =>
  isNil(object) ? false : hasOwn(object, key)
