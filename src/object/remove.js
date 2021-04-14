import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { hasU } from './has.js'
import { setU } from './set.js'

const removeU = (key, object) =>
  hasU(key, object) ? setU(key, undefined, object) : object

export const remove = setName(curry2(removeU), 'remove')
