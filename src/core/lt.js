import { curry2 } from '../function/curry2.js'
import { ltU } from './internal/ltU.js'
import { setName } from './internal/setName.js'

export const lt = setName(curry2(ltU), 'lt')
