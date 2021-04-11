import { hasOwn } from '../../core/internal/index.js'
import { setU } from './setU.js'

export const removeU = (key, object) =>
  hasOwn(object, key) ? setU(key, undefined, object) : object
