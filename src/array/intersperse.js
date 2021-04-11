import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { intersperseU } from './internal/index.js'

export const intersperse = setName(curry2(intersperseU), 'intersperse')
