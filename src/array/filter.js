import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { filterU } from './internal/filterU.js'

export const filter = setName(curry2(filterU), 'filter')
