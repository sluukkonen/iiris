import { hasOwn } from '../../core/internal/index.js'
import { setPropU } from './setPropU.js'

export const modifyPropU = (key, fn, object) =>
  hasOwn(object, key) ? setPropU(key, fn(object[key]), object) : object
