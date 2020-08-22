import { curry2 } from './internal/curry2'
import { maximumByU } from './internal/maximumByU'
import { setName } from './internal/setName'

export const maximumBy = setName(curry2(maximumByU), 'maximumBy')
