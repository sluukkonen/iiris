import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { sortByU } from './internal/sortByU.js'

export const sortBy = setName(curry2(sortByU), 'sortBy')
