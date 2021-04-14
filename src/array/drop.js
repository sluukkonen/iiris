import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { dropU } from './internal/dropU.js'

export const drop = setName(curry2(dropU), 'drop')
