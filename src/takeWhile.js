import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { takeWhileU } from './internal/takeWhileU'

export const takeWhile = setName(curry2(takeWhileU), 'takeWhile')
