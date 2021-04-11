import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { divideByU } from './internal/index.js'

export const divideBy = setName(curry2(divideByU), 'divideBy')
