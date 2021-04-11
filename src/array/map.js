import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { mapU } from './internal/index.js'

export const map = setName(curry2(mapU), 'map')
