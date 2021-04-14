import { curry2 } from './curry2.js'
import { setName } from './internal/setName.js'

const subtractByU = (a, b) => b - a

export const subtractBy = setName(curry2(subtractByU), 'subtractBy')
