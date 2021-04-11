import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { indexOfU } from './internal/index.js'

export const indexOf = setName(curry2(indexOfU), 'indexOf')
