import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { dropU } from './internal/index.js'

export const drop = setName(curry2(dropU), 'drop')
