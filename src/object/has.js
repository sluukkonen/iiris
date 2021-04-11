import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { hasU } from './internal/index.js'

export const has = setName(curry2(hasU), 'has')
