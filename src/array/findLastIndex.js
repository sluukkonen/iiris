import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { findLastIndexU } from './internal/index.js'

export const findLastIndex = setName(curry2(findLastIndexU), 'findLastIndex')
