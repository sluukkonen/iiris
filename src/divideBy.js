import { setName } from './internal/setName.js'
import { curry2 } from './curry2.js'
import { divideByU } from './internal/divideByU.js'

export const divideBy = setName(curry2(divideByU), 'divideBy')
