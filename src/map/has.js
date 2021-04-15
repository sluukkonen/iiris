import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

export const hasU = (key, map) => map.has(key)

export const has = setName(curry2(hasU), 'has')
