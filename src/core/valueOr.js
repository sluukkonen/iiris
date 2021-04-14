import { curry2 } from '../function/curry2.js'
import { setName } from './internal/setName.js'
import { valueOrU } from './internal/valueOrU.js'

export const valueOr = setName(curry2(valueOrU), 'valueOr')
