import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { minimumByU } from './internal/minimumByU.js'

export const minimumBy = setName(curry2(minimumByU), 'minimumBy')
