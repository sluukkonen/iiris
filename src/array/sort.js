import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { sortU } from './internal/sortU.js'

export const sort = setName(curry2(sortU), 'sort')
