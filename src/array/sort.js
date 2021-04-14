import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { sortU } from './internal/sortU.js'

export const sort = setName(curry2(sortU), 'sort')
