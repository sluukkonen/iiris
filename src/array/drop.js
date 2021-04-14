import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { dropU } from './internal/dropU.js'

export const drop = setName(curry2(dropU), 'drop')
