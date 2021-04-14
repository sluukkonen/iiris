import { hasOwn } from '../internal/hasOwn.js'
import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'

export const has = setName(curry2(hasOwn), 'has')
