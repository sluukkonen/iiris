import { identity } from '../identity'
import { second } from '../second'
import { groupMapReduceU } from './groupMapReduceU'

export const indexByU = (keyFn, array) =>
  groupMapReduceU(keyFn, identity, second, array)
