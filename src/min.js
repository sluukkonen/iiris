import { curry2 } from './curry2.js'
import { setName } from './internal/setName.js'

export const minU = (a, b) => (a < b ? a : b)

export const min = setName(curry2(minU), 'min')
