import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { takeWhileU } from './internal/takeWhileU.js'

export const takeWhile = setName(curry2(takeWhileU), 'takeWhile')
