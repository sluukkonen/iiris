import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { concatU } from './internal/index.js'

export const concat = setName(curry2(concatU), 'concat')
