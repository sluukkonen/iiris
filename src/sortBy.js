import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { sortByU } from './internal/sortByU'

export const sortBy = setName(curry2(sortByU), 'sortBy')
