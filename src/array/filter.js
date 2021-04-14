import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { filterU } from './internal/filterU.js'

export const filter = setName(curry2(filterU), 'filter')
