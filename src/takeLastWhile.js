import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { takeLastWhileU } from './internal/takeLastWhileU'

export const takeLastWhile = setName(curry2(takeLastWhileU), 'takeLastWhile')
