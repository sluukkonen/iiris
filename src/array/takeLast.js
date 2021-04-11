import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { takeLastU } from './internal/index.js'

export const takeLast = setName(curry2(takeLastU), 'takeLast')
