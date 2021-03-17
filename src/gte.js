import { curry2 } from './curry2'
import { gteU } from './internal/gteU'
import { setName } from './internal/setName'

export const gte = setName(curry2(gteU), 'gte')
