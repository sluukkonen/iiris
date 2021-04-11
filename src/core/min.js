import { curry2 } from '../function/index.js'
import { minU, setName } from './internal/index.js'

export const min = setName(curry2(minU), 'min')
