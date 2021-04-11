import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { countU } from './internal/index.js'

export const count = setName(curry2(countU), 'count')
