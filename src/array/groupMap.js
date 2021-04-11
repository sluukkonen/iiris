import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { groupMapU } from './internal/index.js'

export const groupMap = setName(curry3(groupMapU), 'groupMap')
