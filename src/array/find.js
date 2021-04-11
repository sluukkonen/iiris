import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { findU } from './internal/index.js'

export const find = setName(curry2(findU), 'find')
