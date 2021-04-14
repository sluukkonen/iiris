import { setName } from '../core/internal/setName.js'
import { identity } from '../function/identity.js'
import { groupMapReduce } from './groupMapReduce.js'

export const indexBy = setName(
  groupMapReduce((a, b) => b, identity),
  'indexBy'
)
