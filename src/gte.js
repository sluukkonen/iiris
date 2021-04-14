import { curry2 } from './curry2.js'
import { gteU } from './internal/gteU.js'
import { setName } from './internal/setName.js'

export const gte = setName(curry2(gteU), 'gte')
