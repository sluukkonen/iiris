import { curry2 } from './curry2'
import { pickByU } from './internal/pickByU'
import { setName } from './internal/setName'

export const pickBy = setName(curry2(pickByU), 'pickBy')
