import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { dropWhileU } from './internal/index.js'

export const dropWhile = setName(curry2(dropWhileU), 'dropWhile')
