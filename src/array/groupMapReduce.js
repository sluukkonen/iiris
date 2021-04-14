import { setName } from '../internal/setName.js'
import { curry4 } from '../curry4.js'
import { groupMapReduceU } from './internal/groupMapReduceU.js'

export const groupMapReduce = setName(curry4(groupMapReduceU), 'groupMapReduce')
