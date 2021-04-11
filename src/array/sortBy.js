import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { sortByU } from './internal/index.js'

export const sortBy = setName(curry2(sortByU), 'sortBy')
