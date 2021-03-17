import { curry2 } from './curry2'
import { filterU } from './internal/filterU'
import { setName } from './internal/setName'

export const filter = setName(curry2(filterU), 'filter')
