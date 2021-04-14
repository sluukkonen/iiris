import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { prependU } from './internal/prependU.js'

export const prepend = setName(curry2(prependU), 'prepend')
