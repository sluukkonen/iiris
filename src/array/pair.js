import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { pairU } from './internal/index.js'

export const pair = setName(curry2(pairU), 'pair')
