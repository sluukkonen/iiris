import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { flattenU } from './internal/index.js'

export const flatten = setName(curry2(flattenU), 'flatten')
