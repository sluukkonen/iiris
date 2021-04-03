import { setPropU } from './setPropU'
import { hasOwn } from './hasOwn'

export const modifyPropU = (key, fn, object) =>
  hasOwn(object, key) ? setPropU(key, fn(object[key]), object) : object
