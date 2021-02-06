import { setName } from './internal/setName'
import { curry2 } from './curry2'
import { dropU } from './internal/dropU'

export const drop = setName(curry2(dropU), 'drop')
