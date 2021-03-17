import { curry2 } from './curry2'
import { maxU } from './internal/maxU'
import { setName } from './internal/setName'

export const max = setName(curry2(maxU), 'max')
