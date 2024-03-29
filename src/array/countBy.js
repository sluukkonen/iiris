import { addU } from '../add.js'
import { setName } from '../internal/setName.js'
import { constant } from '../constant.js'
import { groupMapReduce } from './groupMapReduce.js'

export const countBy = setName(groupMapReduce(addU, constant(1)), 'countBy')
