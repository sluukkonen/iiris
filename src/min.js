import { curry2 } from './curry2'
import { minU } from './internal/minU'
import { setName } from './internal/setName'

export const min = setName(curry2(minU), 'min')
