import { setName } from '../internal/setName.js'
import { identity } from '../identity.js'
import { groupMapReduce } from './groupMapReduce.js'

export const indexBy = setName(
  groupMapReduce((a, b) => b, identity),
  'indexBy'
)
