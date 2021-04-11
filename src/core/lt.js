import { curry2 } from '../function/index.js'
import { ltU, setName } from './internal/index.js'

export const lt = setName(curry2(ltU), 'lt')
