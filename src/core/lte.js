import { curry2 } from '../function/index.js'
import { lteU, setName } from './internal/index.js'

export const lte = setName(curry2(lteU), 'lte')
