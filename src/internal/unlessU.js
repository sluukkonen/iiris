import { identity } from '../identity'
import { ifElseU } from './ifElseU'

export const unlessU = (predicate, ifFalse, value) =>
  ifElseU(predicate, identity, ifFalse, value)
