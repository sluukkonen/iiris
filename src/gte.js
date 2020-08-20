import { setName } from './internal/setName'
import { curry2 } from './internal/curry2'
import { gteU } from './internal/gteU'

export const gte = setName(curry2(gteU), 'gte')
