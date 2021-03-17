import { curry2 } from './curry2'
import { lteU } from './internal/lteU'
import { setName } from './internal/setName'

export const lte = setName(curry2(lteU), 'lte')
