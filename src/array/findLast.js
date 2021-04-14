import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { findLastU } from './internal/findLastU.js'

export const findLast = setName(curry2(findLastU), 'findLast')
