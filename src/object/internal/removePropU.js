import { hasOwn } from '../../core/internal/index.js'
import { setPropU } from './setPropU.js'

export const removePropU = (key, object) =>
  hasOwn(object, key) ? setPropU(key, undefined, object) : object
