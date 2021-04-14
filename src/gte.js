import { curry2 } from './curry2.js'
import { setName } from './internal/setName.js'

const gteU = (a, b) => b >= a

export const gte = setName(curry2(gteU), 'gte')
