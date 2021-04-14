import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { unionU } from './internal/unionU.js'

export const union = setName(curry2(unionU), 'union')
