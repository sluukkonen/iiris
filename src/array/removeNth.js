import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { removeNthU } from './internal/index.js'

export const removeNth = setName(curry2(removeNthU), 'removeNth')
