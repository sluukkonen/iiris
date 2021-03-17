import { curry2 } from './curry2'
import { countU } from './internal/countU'
import { setName } from './internal/setName'

export const count = setName(curry2(countU), 'count')
