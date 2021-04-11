import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { dropLastU } from './internal/index.js'

export const dropLast = setName(curry2(dropLastU), 'dropLast')
