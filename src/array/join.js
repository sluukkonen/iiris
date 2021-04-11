import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { joinU } from './internal/index.js'

export const join = setName(curry2(joinU), 'join')
