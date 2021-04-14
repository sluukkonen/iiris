import { setName } from '../core/internal/setName.js'
import { identity } from '../function/identity.js'
import { groupMap } from './groupMap.js'

export const groupBy = setName(groupMap(identity), 'groupBy')
