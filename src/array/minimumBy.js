import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { minByU } from '../minBy.js'
import { reduce1 } from './internal/reduce1.js'

const minimumByU = (fn, array) => reduce1((a, b) => minByU(fn, a, b), array)

export const minimumBy = setName(curry2(minimumByU), 'minimumBy')
