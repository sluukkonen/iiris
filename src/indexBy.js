import { groupMapReduce } from './groupMapReduce'
import { identity } from './identity'
import { setName } from './internal/setName'
import { second } from './second'

export const indexBy = setName(groupMapReduce(second, identity), 'indexBy')
