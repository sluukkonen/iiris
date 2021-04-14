import { setName } from '../internal/setName.js'
import { curry3 } from '../curry3.js'
import { groupMapU } from './internal/groupMapU.js'

export const groupMap = setName(curry3(groupMapU), 'groupMap')
