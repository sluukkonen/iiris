import { curry2 } from './internal/curry2'
import { pickByU } from './internal/pickByU'
import { setName } from './internal/setName'

export const pickBy = setName(curry2(pickByU), 'pickBy')
