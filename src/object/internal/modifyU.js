import { hasOwn } from '../../core/internal/index.js'
import { setU } from './setU.js'

export const modifyU = (key, fn, object) =>
  hasOwn(object, key) ? setU(key, fn(object[key]), object) : object
