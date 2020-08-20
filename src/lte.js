import { setName } from './internal/setName'
import { curry2 } from './internal/curry2'
import { lteU } from './internal/lteU'

export const lte = setName(curry2(lteU), 'lte')
