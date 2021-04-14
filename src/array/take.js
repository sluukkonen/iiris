import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { takeU } from './internal/takeU.js'

export const take = setName(curry2(takeU), 'take')
