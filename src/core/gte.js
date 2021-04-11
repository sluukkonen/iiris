import { curry2 } from '../function/index.js'
import { gteU, setName } from './internal/index.js'

export const gte = setName(curry2(gteU), 'gte')
