import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { noneU } from './internal/index.js'

export const none = setName(curry2(noneU), 'none')
