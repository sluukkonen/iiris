import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { findLastU } from './internal/index.js'

export const findLast = setName(curry2(findLastU), 'findLast')
