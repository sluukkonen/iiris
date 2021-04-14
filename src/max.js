import { curry2 } from './curry2.js'
import { maxU } from './internal/maxU.js'
import { setName } from './internal/setName.js'

export const max = setName(curry2(maxU), 'max')
