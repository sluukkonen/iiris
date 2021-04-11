import { setName } from '../core/internal/index.js'
import { curry4 } from '../function/index.js'
import { groupMapReduceU } from './internal/index.js'

export const groupMapReduce = setName(curry4(groupMapReduceU), 'groupMapReduce')
