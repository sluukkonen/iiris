import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { hasU } from './internal/hasU.js'

export const has = setName(curry2(hasU), 'has')
