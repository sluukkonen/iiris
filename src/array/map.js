import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { mapU } from './internal/mapU.js'

export const map = setName(curry2(mapU), 'map')
