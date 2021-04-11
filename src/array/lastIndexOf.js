import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { lastIndexOfU } from './internal/index.js'

export const lastIndexOf = setName(curry2(lastIndexOfU), 'lastIndexOf')
