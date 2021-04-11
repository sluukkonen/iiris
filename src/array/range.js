import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { rangeU } from './internal/index.js'

export const range = setName(curry2(rangeU), 'range')
