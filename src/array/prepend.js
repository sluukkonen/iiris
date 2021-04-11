import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { prependU } from './internal/index.js'

export const prepend = setName(curry2(prependU), 'prepend')
