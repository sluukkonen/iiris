import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { mapU } from './internal/mapU.js'

export const map = setName(curry2(mapU), 'map')
