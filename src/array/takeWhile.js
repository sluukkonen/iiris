import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { takeWhileU } from './internal/index.js'

export const takeWhile = setName(curry2(takeWhileU), 'takeWhile')
