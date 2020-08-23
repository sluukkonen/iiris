import { identity } from '../identity'
import { groupMapU } from './groupMapU'

export const groupByU = (keyFn, array) => groupMapU(keyFn, identity, array)
