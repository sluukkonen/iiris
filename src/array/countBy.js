import { setName } from '../core/internal/setName.js'
import { constant } from '../function/constant.js'
import { addU } from '../math/internal/addU.js'
import { groupMapReduce } from './groupMapReduce.js'

export const countBy = setName(groupMapReduce(addU, constant(1)), 'countBy')
