import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { filterU } from './internal/index.js'

export const filter = setName(curry2(filterU), 'filter')
