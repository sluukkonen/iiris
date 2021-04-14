import { setName } from '../internal/setName.js'
import { identity } from '../identity.js'
import { groupMap } from './groupMap.js'

export const groupBy = setName(groupMap(identity), 'groupBy')
