import { curry2 } from '../function/curry2.js'
import { minU } from './internal/minU.js'
import { setName } from './internal/setName.js'

export const min = setName(curry2(minU), 'min')
