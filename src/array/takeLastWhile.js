import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { takeLastWhileU } from './internal/takeLastWhileU.js'

export const takeLastWhile = setName(curry2(takeLastWhileU), 'takeLastWhile')
