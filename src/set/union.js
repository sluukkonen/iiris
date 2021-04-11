import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { unionU } from './internal/index.js'

export const union = setName(curry2(unionU), 'union')
