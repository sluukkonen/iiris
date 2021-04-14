import { curry2 } from './curry2.js'
import { setName } from './internal/setName.js'

export const maxU = (a, b) => (a > b ? a : b)

export const max = setName(curry2(maxU), 'max')
