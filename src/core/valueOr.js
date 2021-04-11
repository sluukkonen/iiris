import { curry2 } from '../function/index.js'
import { setName, valueOrU } from './internal/index.js'

export const valueOr = setName(curry2(valueOrU), 'valueOr')
