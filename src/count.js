import { countU } from './internal/countU'
import { curry2 } from './curry2'
import { setName } from './internal/setName'

export const count = setName(curry2(countU), 'count')