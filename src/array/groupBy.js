import { setName } from '../core/internal/index.js'
import { identity } from '../function/index.js'
import { groupMap } from './groupMap.js'

export const groupBy = setName(groupMap(identity), 'groupBy')
