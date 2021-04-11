import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { dropLastWhileU } from './internal/index.js'

export const dropLastWhile = setName(curry2(dropLastWhileU), 'dropLastWhile')
