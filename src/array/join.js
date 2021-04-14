import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { joinU } from './internal/joinU.js'

export const join = setName(curry2(joinU), 'join')
