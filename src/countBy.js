import { countByU } from './internal/countByU'
import { curry2 } from './curry2'
import { setName } from './internal/setName'

export const countBy = setName(curry2(countByU), 'countBy')
