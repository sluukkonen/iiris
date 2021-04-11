import { curry2 } from '../function/index.js'
import { maxU, setName } from './internal/index.js'

export const max = setName(curry2(maxU), 'max')
