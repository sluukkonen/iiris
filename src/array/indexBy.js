import { setName } from '../core/internal/index.js'
import { identity, second } from '../function/index.js'
import { groupMapReduce } from './groupMapReduce.js'

export const indexBy = setName(groupMapReduce(second, identity), 'indexBy')
