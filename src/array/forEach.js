import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { forEachU } from './internal/index.js'

export const forEach = setName(curry2(forEachU), 'forEach')
