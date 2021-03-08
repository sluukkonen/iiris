import { groupMap } from './groupMap'
import { identity } from './identity'
import { setName } from './internal/setName'

export const groupBy = setName(groupMap(identity), 'groupBy')
