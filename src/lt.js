import { curry2 } from './curry2.js'
import { setName } from './internal/setName.js'

const ltU = (a, b) => b < a

export const lt = setName(curry2(ltU), 'lt')
