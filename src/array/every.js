import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { everyU } from './internal/index.js'

export const every = setName(curry2(everyU), 'every')
