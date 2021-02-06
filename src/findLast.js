import { curry2 } from './curry2'
import { findLastU } from './internal/findLastU'
import { setName } from './internal/setName'

export const findLast = setName(curry2(findLastU), 'findLast')
