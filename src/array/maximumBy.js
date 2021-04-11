import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { maximumByU } from './internal/index.js'

export const maximumBy = setName(curry2(maximumByU), 'maximumBy')
