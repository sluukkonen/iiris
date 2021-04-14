import { hasOwn } from '../../core/internal/hasOwn.js'
import { setU } from './setU.js'

export const modifyU = (key, fn, object) =>
  hasOwn(key, object) ? setU(key, fn(object[key]), object) : object
