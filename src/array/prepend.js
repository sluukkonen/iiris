import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { prependU } from './internal/prependU.js'

export const prepend = setName(curry2(prependU), 'prepend')
