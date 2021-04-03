import { hasOwn } from './hasOwn'
import { setPropU } from './setPropU'

export const removePropU = (key, object) =>
  hasOwn(object, key) ? setPropU(key, undefined, object) : object
