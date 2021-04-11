import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { findIndexU } from './internal/index.js'

export const findIndex = setName(curry2(findIndexU), 'findIndex')
