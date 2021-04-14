import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { countU } from './internal/countU.js'

export const count = setName(curry2(countU), 'count')
