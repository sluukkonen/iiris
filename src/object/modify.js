import { curry3 } from '../curry3.js'
import { setName } from '../internal/setName.js'
import { hasU } from './has.js'
import { setU } from './set.js'

const modifyU = (key, fn, object) =>
  hasU(key, object) ? setU(key, fn(object[key]), object) : object

export const modify = setName(curry3(modifyU), 'modify')
