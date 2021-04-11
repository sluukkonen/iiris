import { setName } from '../core/internal/index.js'
import { constant } from '../function/index.js'
import { addU } from '../math/internal/index.js'
import { groupMapReduce } from './groupMapReduce.js'

export const countBy = setName(groupMapReduce(addU, constant(1)), 'countBy')
