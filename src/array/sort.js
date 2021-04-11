import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { sortU } from './internal/index.js'

export const sort = setName(curry2(sortU), 'sort')
