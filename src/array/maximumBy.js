import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { maximumByU } from './internal/maximumByU.js'

export const maximumBy = setName(curry2(maximumByU), 'maximumBy')
