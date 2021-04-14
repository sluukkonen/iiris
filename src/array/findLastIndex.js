import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { findLastIndexU } from './internal/findLastIndexU.js'

export const findLastIndex = setName(curry2(findLastIndexU), 'findLastIndex')
