import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { minimumByU } from './internal/index.js'

export const minimumBy = setName(curry2(minimumByU), 'minimumBy')
