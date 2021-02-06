import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { unionU } from './internal/unionU'

export const union = setName(curry2(unionU), 'union')
