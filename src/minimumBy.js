import { curry2 } from './curry2'
import { minimumByU } from './internal/minimumByU'
import { setName } from './internal/setName'

export const minimumBy = setName(curry2(minimumByU), 'minimumBy')
