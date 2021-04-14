import { hasOwn } from '../../internal/hasOwn.js'
import { setU } from './setU.js'

export const removeU = (key, object) =>
  hasOwn(key, object) ? setU(key, undefined, object) : object
