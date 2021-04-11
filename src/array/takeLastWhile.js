import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { takeLastWhileU } from './internal/index.js'

export const takeLastWhile = setName(curry2(takeLastWhileU), 'takeLastWhile')
