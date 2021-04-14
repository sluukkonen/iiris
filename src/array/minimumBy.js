import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { minimumByU } from './internal/minimumByU.js'

export const minimumBy = setName(curry2(minimumByU), 'minimumBy')
