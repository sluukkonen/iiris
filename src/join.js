import { curry2 } from './curry2'
import { joinU } from './internal/joinU'
import { setName } from './internal/setName'

export const join = setName(curry2(joinU), 'join')
