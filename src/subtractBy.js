import { setName } from './internal/setName.js'
import { curry2 } from './curry2.js'
import { subtractByU } from './internal/subtractByU.js'

export const subtractBy = setName(curry2(subtractByU), 'subtractBy')
