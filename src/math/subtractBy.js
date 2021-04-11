import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { subtractByU } from './internal/index.js'

export const subtractBy = setName(curry2(subtractByU), 'subtractBy')
