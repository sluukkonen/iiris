import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { includesU } from './internal/index.js'

export const includes = setName(curry2(includesU), 'includes')
