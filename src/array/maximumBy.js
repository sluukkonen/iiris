import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { maxByU } from '../maxBy.js'
import { reduce1 } from './internal/reduce1.js'

const maximumByU = (fn, array) => reduce1((a, b) => maxByU(fn, a, b), array)

export const maximumBy = setName(curry2(maximumByU), 'maximumBy')
