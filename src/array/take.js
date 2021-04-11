import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { takeU } from './internal/index.js'

export const take = setName(curry2(takeU), 'take')
