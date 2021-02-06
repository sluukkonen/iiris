import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { subtractByU } from './internal/subtractByU'

export const subtractBy = setName(curry2(subtractByU), 'subtractBy')
