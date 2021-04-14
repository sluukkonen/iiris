import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { takeLastWhileU } from './internal/takeLastWhileU.js'

export const takeLastWhile = setName(curry2(takeLastWhileU), 'takeLastWhile')
