import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

export const hasU = (value, set) => set.has(value)

export const has = setName(curry2(hasU), 'has')
