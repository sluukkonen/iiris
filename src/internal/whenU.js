import { identity } from '../identity'
import { ifElseU } from './ifElseU'

export const whenU = (predicate, ifTrue, value) =>
  ifElseU(predicate, ifTrue, identity, value)
