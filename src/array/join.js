import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { joinU } from './internal/joinU.js'

export const join = setName(curry2(joinU), 'join')
