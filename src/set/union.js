import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { unionU } from './internal/unionU.js'

export const union = setName(curry2(unionU), 'union')
