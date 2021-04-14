import { curry2 } from '../function/curry2.js'
import { lteU } from './internal/lteU.js'
import { setName } from './internal/setName.js'

export const lte = setName(curry2(lteU), 'lte')
