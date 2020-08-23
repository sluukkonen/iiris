import { curry4 } from './internal/curry4'
import { groupMapReduceU } from './internal/groupMapReduceU'
import { setName } from './internal/setName'

export const groupMapReduce = setName(curry4(groupMapReduceU), 'groupMapReduce')
