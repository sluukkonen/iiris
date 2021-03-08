import { constant } from './constant'
import { groupMapReduce } from './groupMapReduce'
import { addU } from './internal/addU'
import { setName } from './internal/setName'

export const countBy = setName(groupMapReduce(addU, constant(1)), 'countBy')
