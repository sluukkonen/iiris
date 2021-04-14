import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const prependU = (value, array) => [value, ...array]

export const prepend = setName(curry2(prependU), 'prepend')
