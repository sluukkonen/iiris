import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { takeLastU } from './internal/takeLastU.js'

export const takeLast = setName(curry2(takeLastU), 'takeLast')
