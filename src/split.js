import { setName } from './internal/setName'
import { curry2 } from './curry2'
import { splitU } from './internal/splitU'

export const split = setName(curry2(splitU), 'split')
