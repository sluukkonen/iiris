import { curry2 } from './curry2.js'
import { setName } from './internal/setName.js'

const divideByU = (a, b) => b / a

export const divideBy = setName(curry2(divideByU), 'divideBy')
