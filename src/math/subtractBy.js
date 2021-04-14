import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { subtractByU } from './internal/subtractByU.js'

export const subtractBy = setName(curry2(subtractByU), 'subtractBy')
