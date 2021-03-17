import { curry2 } from './curry2'
import { dropU } from './internal/dropU'
import { setName } from './internal/setName'

export const drop = setName(curry2(dropU), 'drop')
