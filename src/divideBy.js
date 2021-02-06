import { curry2 } from './curry2'
import { divideByU } from './internal/divideByU'
import { setName } from './internal/setName'

export const divideBy = setName(curry2(divideByU), 'divideBy')
