import { setName } from '../core/internal/index.js'
import { identity } from '../function/index.js'
import { groupMapReduce } from './groupMapReduce.js'

export const indexBy = setName(
  groupMapReduce((a, b) => b, identity),
  'indexBy'
)
